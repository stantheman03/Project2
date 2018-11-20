module.exports = function (sequelize, Datatypes) {
    var productSold = sequelize.define('productSold', {
        quantity: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });
    productSold.associate = function (models) {
        productSold.belongsTo(models.Coffee, {
                foreignKey: {
                    allowNull: false
                }
            }),
            productSold.belongsTo(models.order, {
                foreignKey: {
                    allowNull: false
                }
            })
    };


    return productSold;
}