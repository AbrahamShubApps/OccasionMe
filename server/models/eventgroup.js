module.exports = (sequelize, DataTypes) => {
  const EventGroup = sequelize.define('EventGroup', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  EventGroup.associate = (models) => {
    EventGroup.hasMany(models.Event, {
      foreignKey: 'eventGroupId',
      as: 'events',
    })
  };
  return EventGroup;
};