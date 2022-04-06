const Router = require('express')
const Tasks = require('../models/tasks')

const router = Router()

router.set('views', './src/views')

router.get('/',(req,res) => { 
    res.render('tasks', {
        title: 'Tasks',
        tasks: true
    }) 
})

module.exports = router