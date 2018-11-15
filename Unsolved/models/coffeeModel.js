module.exports = function (sequelize, Datatypes) {
    var Coffee = sequelize.define('Coffee', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        CoffeeType: {
            type: Datatypes.STRING,
            allowNull: false
        },
        roast: {
            type: Datatypes.STRING,
            allowNull: false
        },
        price: {
            type: Datatypes.FLOAT,
            allowNull: false
        },
        productId:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: Datatypes.STRING,
            allowNull: false
        },
        updatedAt: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });
    Coffee.associate = function (models) {
        //change if needed hasmany?????
        Coffee.hasMany(models.productSold, {
            onDelete: "cascade"
        });
    };

    return Coffee;
}