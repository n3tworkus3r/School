const Router = require('express')
const Tasks = require('../models/tasks')

const router = Router()

router.set('views', './src/views')

router.get('/',(req,res) => {
    res.render('add', {
        title: 'Add',
        add: true
    }) 
})


router.post('/', async (req,res) => {
    try {
        const tasks = await Tasks.create({
            title: req.body.title,
            done: false
        })
        res.status(201).json({ tasks })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

/*
router.post('/',(req,res) => {
    const task = new Tasks(req.body.text, req.body.solution, req.body.img, req.body.complexity )

    task.save()
    res.redirect('/tasks')
})
*/

module.exports = router
