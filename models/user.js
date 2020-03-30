'use strict';
const { encrypt } = require("../helper/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email already in use !'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len : {
          args: [6],
          msg: 'Password must be at least 6 characters !'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = encrypt(User.password);
      }
    },
    sequelize,
    modelName: 'User'
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo, { foreignKey: 'UserId', targetKey: 'id' })
  };
  return User;
};