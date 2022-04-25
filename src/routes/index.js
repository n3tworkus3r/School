const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

router.get('/', async (req,res) => {
    const tasks = await Tasks.get_all()
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true,
        tasks // Передача объекта tasks в html файл
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})


router.get('/:id', async (req,res) => {
    const task = await Tasks.get_by_id(req.params.id)
    res.render('task', {  
        title: `Задача`,
        task
    })
})

/*
router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const task = await Tasks.get_by_id(req.params.id) 

    res.render('task-edit'), {
        title: 'Редактировать задачу',
        task
    }
})
*/
router.post('/', async (req,res) => {
    console.log(req.body)
    const task = new Tasks(req.body.text, req.body.solution, req.body.img, req.body.complexity)
    await task.save()
    res.redirect('/')
})

router.post('/edit', async (req,res) => {
    await Tasks.update(req.body)
    res.redirect('/')
})


////////////////////// NEW CODE
/*
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
 */
 ///////////////////////////////
module.exports = router