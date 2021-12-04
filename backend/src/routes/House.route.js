const {Router} = require('express')
const router = Router()
const HouseCtrl = require('../controller/House.controller')
const Auth = require('../helper/Auth')


router.post('/create', Auth.verificateToken, HouseCtrl.create)
router.get('/list', HouseCtrl.list)
router.get('/list/:id', HouseCtrl.listId)
router.get('/list/:id', HouseCtrl.listCity)
router.delete('/delete/:id', Auth.verificateToken, HouseCtrl.delete)
router.put('/update/:id', Auth.verificateToken, HouseCtrl.update)
router.get('/searchHouse/:criterio', HouseCtrl.searchHouse)




module.exports = router
