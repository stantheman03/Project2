module.exports = function (sequelize, Datatypes) {
    var order = sequelize.define('order', {}, {
        freezeTableName: true,
    });
    order.associate = function (models) {
        order.hasMany(models.productSold, {
                foreignKey: {
                    allowNull: false
                }
            }),
            order.belongsTo(models.Customer, {
                foreignKey: {
                    allowNull: false
                }
            });
    };

    return order;
}