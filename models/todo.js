'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tittle must be filled !"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description must be filled !"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter : {
          args: `${new Date().toLocaleDateString()}`,
          msg: `Forbidden to fill recent days, must be tomorrow or greater than today date`
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Todo'
  })

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};