const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type':'text/html'})
        
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
  
        }
        res.end()
    }
})


server.listen(3000, () => {
    console.log('Server is running...')
})