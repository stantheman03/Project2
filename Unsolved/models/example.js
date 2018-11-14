module.exports = function(sequelize,Datatypes){
  var Coffee = sequelize.define('Coffee',{
      name:{
          type: Datatypes.STRING,
          allowNull:false,
          validate:{
              isAlpha:true
          }
      },
      CoffeeType:{
          type:Datatypes.STRING,
          allowNull:false
      },
      roast:{
          type:Datatypes.STRING,
          allowNull:false
      },
      createdAt:{
          type:Datatype.INTERGER,
          allowNull:false
      },
      updatedAt:{
          type:Datatype.INTERGER,
          allowNull:false
      }
  })
  Coffee.associate = function(models){

  }

  return Coffee;
}
