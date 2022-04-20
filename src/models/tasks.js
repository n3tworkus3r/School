const Sequelize = require('sequelize');
const sequelize = require('../database/db_connect');
const uuid = require('uuid')
const fs = require('fs')
const path = require('path');
const res = require('express/lib/response');
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

class Tasks {
  constructor(text,solution,img,complexity){
    this.id = uuid(),
    this.text = text,
    this.solution = solution,
    this.img = img,
    this.complexity = complexity
  }

  async save() {
    const tasks = await Tasks.get_all()
    console.log('Tasks', tasks)
  }

  static get_all() {
    return new Promise((resolve,reject) => {
      fs.readFile(
        path.join(__dirname,'..','database','tasks.json'),
        'utf-8',
        (err,content) => {
          if (err) { 
            reject(err)
          }
          else {
            resolve(JSON.parse(content))
          }
          
        }
      )
    })
  }
}
/*
const Tasks = sequelize.define("Tasks", {
  task_id: {
    type: Sequelize.INTEGER,
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
})

*/


module.exports = Tasks
