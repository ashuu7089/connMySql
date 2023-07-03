const { Sequelize } = require('sequelize');

const sequelize = new Sequelize (process.env.databaseName, process.env.user, process.env.password, { 
    host : 'localhost',
    dialect : 'mysql'
});

try{
    sequelize.authenticate();
    console.log("connection successfully established...")
}catch(error){
    console.log(error.slack)
}

module.exports = sequelize ;
