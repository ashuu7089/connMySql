const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');

const userSchema = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userPhone: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    userScreen : {
            type: DataTypes.STRING,    
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        tableName: "users"
    }
)
console.log(userSchema === sequelize.models.User);

module.exports = userSchema;
