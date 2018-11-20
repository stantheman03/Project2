module.exports = function(sequelize,Datatypes){
    var Customer = sequelize.define('Customer',{
        name:{
            type: Datatypes.STRING,
            allowNull:false,
            validate:{
                isAlpha:true
            }
        }
    },
    {
      freezeTableName: true,
    });
    Customer.associate = function(models){
        Customer.hasMany(models.order,{
            foreignKey: {
                allowNull: false
            }
        });
    };
  
    return Customer;
  }
  