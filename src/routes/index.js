const Router = require('express')
const router = Router()
const mssql = require('../database/db_operations')

router.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})


router.get('/testconnect',(req,res) => {
    
    mssql.get_data()
    res.render('index', {
        title: 'Main',
        main: true
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})

// test connection
module.exports = router