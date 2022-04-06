const Router = require('express')
const Tasks = require('../models/tasks')

const router = Router()

router.get('/',(req,res) => {
    res.render('add', {
        title: 'Add',
        add: true
    }) 
})

router.post('/',(req,res) => {
    const task = new Tasks(req.body.text, req.body.solution, req.body.img, req.body.complexity )

    task.save()
    res.redirect('/tasks')
})

module.exports = router
