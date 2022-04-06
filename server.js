////////// USED MODULES //////////
const handlebars = require('express-handlebars')
const express = require('express')
const mssql = require('./src/database/db_operations')
//const index_routes =  require('./src/routes/index')
//const subjects_routes =  require('./src/routes/subjects')
const tasks_routes =  require('./src/routes/tasks')
//const add_routes =  require('./src/routes/add')
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
app.set('views', './src/pages')

app.use(express.static(__dirname + '/src/public'))
/////////////////////////////////

//////// EXPRESS ROUTING ////////
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
})/*
app.get('/tasks',(req,res) => { 
    res.render('tasks', {
        title: 'Tasks',
        tasks: true
    }) 
})
*/

app.get('/add',(req,res) => {
    res.render('add', {
        title: 'Add',
        add: true
    }) 
})


app.get('/testconnect',(req,res) => {
    
    mssql.get_data()
    res.render('index', {
        title: 'Main',
        main: true
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})
//app.use('/',index_routes)
//app.use('/src/subjects',subjects_routes)
app.use('/tasks',tasks_routes)
//app.use('/src/add',add_routes)
/////////////////////////////////


const PORT = process.env.PORT || 3000  
// Запуск сервера (express)
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})

















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

