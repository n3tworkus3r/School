const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

///////////////////////////////////////
// УДАЛЕНИЕ ЗАДАЧИ
///////////////////////////////////////

router.post('/', async (req,res) => {

    const text = req.body.text
    console.log("!!!"+text)
    const task = await Tasks.deleteOne()({text:req.body.text})
    res.redirect('/')
})

module.exports = router