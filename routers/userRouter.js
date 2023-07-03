const router = require('express').Router()
const user = require('../controllers/userController')

router.post('/add', user.createUser)
router.get('/getall', user.getAllUser)
router.get('/get/:id', user.getSingleUser)
router.patch('/update/:id', user.updateUser)
router.delete('/delete/:id', user.deleteUser)

module.exports = router ;
