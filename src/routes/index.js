const Router = require('express')

const router = Router()

router.set('views', './src/views')

router.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})

module.exports = router