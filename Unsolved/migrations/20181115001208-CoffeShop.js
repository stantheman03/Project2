'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Coffee',
   {
     id:{
       allowNull:false,
       autoIncrement:true,
       primaryKey:true,
       type:Sequelize.INTEGER
     },
     name:{
       type:Sequelize.STRING
     },
     CoffeeType:{
       type:Sequelize.STRING
     },
     roast:{
       type:Sequelize.STRING
     },
     price:{
       type:Sequelize.FLOAT
     }
   })
 },

 down: (queryInterface, Sequelize) => {

     return queryInterface.dropTable('Coffee');

 }
};