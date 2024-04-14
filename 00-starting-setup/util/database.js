const sequelize= require('sequelize');
 const seq= new sequelize('node-complete', 'root', 'Password@123',{
    dialect:' mysql',
    host: 'localhost'
 });
 module.exports=sequelize;