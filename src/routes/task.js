const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

///////////////////////////////////////
// УДАЛЕНИЕ ЗАДАЧИ
///////////////////////////////////////

router.post('/remove', async (req,res) => {
   try{
       console.log('XXXXXXXXXXX')
    await Tasks.deleteOne({
        _id:req.body.id
    })
    res.redirect('/')
   }
   catch(e) {
        console.log(e)
   }
  
})

module.exports = router