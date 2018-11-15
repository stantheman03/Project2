module.exports = function(sequelize,Datatypes){
    var Customer = sequelize.define('Customer',{
        name:{
            type: Datatypes.STRING,
            allowNull:false,
            validate:{
                isAlpha:true
            }
        },
        createdAt:{
            type:Datatypes.STRING,
            allowNull:false
        },
        updatedAt:{
            type:Datatypes.STRING,
            allowNull:false
        },
        orderId:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    },
    {
      freezeTableName: true,
    });
    Customer.associate = function(models){
        Customer.belongsTo(models.order,{
            foreignKey: {
                allowNull: false
            }
        });
    };
  
    return Customer;
  }
  