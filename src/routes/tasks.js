const Router = require('express')
const router = Router()

router.set('views', './src/views')

router.get('/',(req,res) => { 
    res.render('tasks', {
        title: 'Tasks',
        tasks: true
    }) 
})

module.exports = router