const http = require('http')

const server = http.createServer((req,res) => {
    if(req.method === 'GET') {
        res.end(`
        <h1>Form</h1>
        `)
    }
})


server.listen(3000, () => {
    console.log('Server is running...')
})