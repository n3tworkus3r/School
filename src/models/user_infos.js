const Sequelize = require("sequelize");
//const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE User_infos  
(
	user_id int PRIMARY KEY NOT NULL IDENTITY,  
	email varchar(30),  
	address varchar(30),
	phone varchar(30),
	img varchar(100)
);  
*/

const User_infos = sequelize.define("User_infos", {
  user_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "user_id"
  },
  email: {
    type: Sequelize.STRING(30),
    allowNull: true,
    unique: false,
    field: "email"
  },
  address: {
    type: Sequelize.STRING(30),
    allowNull: true,
    unique: false,
    field: "address"
  },
  phone: {
    type: Sequelize.STRING(30),
    allowNull: true,
    unique: true,
    field: "phone"
  },
  img: {
    type: Sequelize.STRING(100),
    allowNull: true,
    unique: true,
    field: "img"
  }
});


module.exports = User_infos;