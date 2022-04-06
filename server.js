////////// USED MODULES //////////
const handlebars = require('express-handlebars')
const express = require('express')
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

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'src/pages')
/////////////////////////////////

 app.get('/',(req,res) => {
     res.status(200)
     res.render('index')
     //res.sendFile(path.join(__dirname,'src/pages','index.html'))
 })

 app.get('/about',(req,res) => {
    res.status(200)
    res.render('about')
    //res.sendFile(path.join(__dirname,'src/pages','about.html'))
})
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