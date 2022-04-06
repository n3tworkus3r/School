const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");

/*
CREATE TABLE Tasks  
(
	task_id int PRIMARY KEY NOT NULL IDENTITY,  
	text varchar(255) NOT NULL,
	solution varchar(255) NOT NULL,
	img varchar(100),
	complexity float
);
*/

const Tasks = sequelize.define("Tasks", {
  task_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "task_id"
  },
  text: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: false,
    field: "text"
  },
  solution: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: false,
    field: "solution"
  },
  img: {
    type: Sequelize.STRING(100),
    allowNull: true,
    unique: false,
    field: "img"
  },
  complexity: {
    type: Sequelize.FLOAT,
    allowNull: true,
    unique: false,
    field: "complexity"
  }
});




module.exports = Tasks;
