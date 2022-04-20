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