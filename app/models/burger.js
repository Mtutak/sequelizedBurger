// Dependencies
// =============================================================
//  S(capital) references the standard library
var Sequelize = require("sequelize");
// s(lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    // the name of the character (a string)
    name: Sequelize.STRING,
    // the character's role (a string)
    role: Sequelize.STRING,
    // the character's age (a string)
    age: Sequelize.INTEGER,
    // and the character's force points (an int)
    forcePoints: Sequelize.INTEGER
}, {
    timestamps: false
});
// Syncs with DB
Character.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
defaultValue: true
# # # Schema
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(id INT NOT NULL AUTO_INCREMENT, burger_name varchar(255) NOT NULL, devoured BOOLEAN NOT NULL, date TIMESTAMP NOT NULL, PRIMARY KEY(id));
DROP DATABASE `starwars`;
CREATE DATABASE `starwars`;
INSERT INTO burgers_db(burger_name, devoured) VALUES('Double Chezborger', false);
INSERT INTO burgers_db(burger_name, devoured) VALUES('Kuma Burger', false);
INSERT INTO burgers_db(burger_name, devoured) VALUES('Three Aces Burger', false);
INSERT INTO burgers_db(burger_name, devoured) VALUES('Small Cheval Burger', false);
INSERT INTO burgers_db(burger_name, devoured) VALUES('Lockdown Burger', false);