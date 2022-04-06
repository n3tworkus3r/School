const Router = require('express')
const router = Router()

router.get('/',(req,res) => { 
    res.render('tasks', {
        title: 'Tasks',
        tasks: true
    }) 
})

module.exports = router