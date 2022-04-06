const Router = require('express')
const router = Router()

router.get('/',(req,res) => {
    res.status(200)
    res.render('subjects', {
        title: 'Subjects',
        subjects: true
    })
    //res.sendFile(path.join(__dirname,'src/pages','subjects.html'))
})
module.exports = router