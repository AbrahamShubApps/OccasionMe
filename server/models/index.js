'use strict';

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null
  if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });
  } else if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
  fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    global.db[model.name] = model;
  });
  
  Object.keys(global.db).forEach(modelName => {
    if (global.db[modelName].associate) {
      global.db[modelName].associate(global.db);
    }
  });
  
  global.db.sequelize = sequelize;
  global.db.Sequelize = Sequelize;
};



module.exports = global.db;
