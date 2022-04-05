const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    
    
    switch(req.method) {
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
           
        break

    }
})


// Запуск сервера
server.listen(3000, () => {
    console.log('Server is running...')
})