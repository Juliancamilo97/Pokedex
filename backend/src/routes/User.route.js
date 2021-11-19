const {Router} = require('express')
const router = Router()
const UserCtrl = require('../controller/User.controller')

router.post('/create', UserCtrl.createUser)
router.post('/login', UserCtrl.login)




module.exports = router