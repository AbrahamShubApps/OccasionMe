'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
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