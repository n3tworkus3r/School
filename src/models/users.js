const Sequelize = require("sequelize");
//const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE Users  
(
	user_id int PRIMARY KEY NOT NULL IDENTITY,  
	login varchar(30) NOT NULL,  
	password varchar(30) NOT NULL,  
	role int NOT NULL
); 
*/

const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "user_id"
  },
  login: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: false,
    field: "login"
  },
  password: {
    type: Sequelize.STRING(30),
    allowNull: true,
    field: "password"
  },
  role: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    unique: false,
    field: "role"
  },
});


module.exports = Users;
