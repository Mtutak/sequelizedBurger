var Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    // Creates a Burger model that matches up with DB burger_db
    var Burger = sequelize.define("Burger", {
        // the routeName gets saved as a string
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;
};