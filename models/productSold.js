module.exports = function(sequelize,Datatypes){
    var productSold = sequelize.define('productSold',{
        productId:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        orderId:{
            type:Datatypes.INTEGER,
            allowNull:false
        },
        createdAt: {
            type: Datatypes.STRING,
            allowNull: false
        },
        updatedAt: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    {
      freezeTableName: true,
    });
    productSold.associate = function(models){
        productSold.belongsTo(models.Coffee,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    productSold.associate = function (models){
        productSold.hasMany(models.order,{
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return productSold;
  }
  