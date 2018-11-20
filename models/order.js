module.exports = function(sequelize,Datatypes){
    var order = sequelize.define('order',{
        customerId:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    },
    {
      freezeTableName: true,
    });
    order.associate = function(models){
        order.belongsTo(models.productSold,{
            foreignKey: {
                allowNull: false
            }
        }),
        order.hasMany(models.Customer,{
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return order;
  }
  