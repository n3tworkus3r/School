const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        
        if(req.url === '/') {
            fs.readFile(path.join(__dirname,'pages','index.html'), 'utf-8',
            (err,content) => {
                if(err) { throw err }
                res.end(content)
            })
        } else if (req.method === 'POST') {
            const body = []

            req.on('data', data => {
                body.push(Buffer.from(data))
            })
        }
        res.end(`
        <h1>Ваше сообщение</h1>`)

        /*
        switch(req.url) {
            case '/':
                fs.readFile(path.join(__dirname,'pages','index.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
            case '/about':
                fs.readFile(path.join(__dirname,'pages','about.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
  
        } */
    }
})


server.listen(3000, () => {
    console.log('Server is running...')
})