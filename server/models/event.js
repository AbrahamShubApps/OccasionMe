'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.EventGroup, {
      foreignKey: 'eventGroupId',
      onDelete: 'CASCADE',
    })
  }
  return Event;
}