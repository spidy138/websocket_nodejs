const config=require('../config/configuration');
const {Sequelize, DataTypes} =require('sequelize');
const sequelize=new Sequelize(config.database,config.username,config.password,{
  host: config.host,
  dialect: config.dialect
});

const Customer= sequelize.define('Customer',{

  firstName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false
  }
});

sequelize.sync().then(()=>{
  console.log('database is in sync');
})
.catch((error)=>{
  console.error("error in synchronization");
});
module.exports={
  Customer
}