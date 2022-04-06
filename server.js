////////// USED MODULES //////////
const handlebars = require('express-handlebars')
const express = require('express')
//const mssql = require('./src/database/db_operations')
const index_routes =  require('./src/routes/index')
const subjects_routes =  require('./src/routes/subjects')
const tasks_routes =  require('./src/routes/tasks')
const add_routes =  require('./src/routes/add')
const sequelize = require('./src/database/db_connect')
//const fs = require('fs')
//const path = require('path') // enable for express routing
//const http = require('http')
//////////////////////////////////

//////// SERVER INSTANCES ////////
const app = express()
//const server = http.createServer((req,res) => { })
/////////////////////////////////

////// HANDLEBARS SETTING ///////
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
/////////////////////////////////

//// VARIABLES REGISTRATION /////
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static('src/public'))
/////////////////////////////////

//////// EXPRESS ROUTING ////////
app.use('/',index_routes)
app.use('/subjects',subjects_routes)
app.use('/tasks',tasks_routes)
app.use('/add',add_routes)
/////////////////////////////////

////////// DB CONNECT ///////////

const PORT = process.env.PORT || 3000  

async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Запуск сервера (express)
        app.listen(PORT,() => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
start()
/*
const PORT = process.env.PORT || 3000  
async function start() {
    try {
        await sequelize.sync()

        // Запуск сервера (express)
        app.listen(PORT,() => {
            console.log(`Server is running on port ${PORT}`)
        })
    }
    catch(err) {
        console.log(err)
    }  
}
*/















////// OLD EXPRESS ROUTING //////
/*
app.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
})

app.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
})

app.get('/subjects',(req,res) => {
    res.status(200)
    res.render('subjects', {
        title: 'Subjects',
        subjects: true
    })
})
*/
/////////////////////////////////

/*
// Запуск сервера (http)
server.listen(3000, () => {
    console.log('Server is running...')
})
*/

///////// HTTP ROUTING //////////
/*    switch(req.method) {
    case 'GET':
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        
        // Выбор страницы для загрузки
        switch(req.url) {
            case '/': // Main page
                fs.readFile(path.join(__dirname,'src/pages','index.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
            case '/about': // About page
                fs.readFile(path.join(__dirname,'src/pages','about.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
        }
    break
    case 'POST':
        //
        //
        //
    break
}
*/
/////////////////////////////////

