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

router.post('/',(req,res) => {
    console.log(req.body)
})



////////////////////// NEW CODE
router.post('/', async (req,res) => { 
    try {
        const task = await Tasks.create( {
            title: req.body.title,
            done: false
        })
        res.status(201).json({task})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error!'
        })
        
    } 
 })
 ///////////////////////////////
module.exports = router