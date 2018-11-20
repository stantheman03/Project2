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
        }
    }, {
        freezeTableName: true,
    });
    Coffee.associate = function (models) {
        Coffee.hasMany(models.productSold, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });
    };
    

    return Coffee;
}