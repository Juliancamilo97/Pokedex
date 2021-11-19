const {Router} = require('express')
const router = Router()
const HouseCtrl = require('../controller/House.controller')

router.post('/create', HouseCtrl.create)
router.get('/list', HouseCtrl.list)
router.get('/list/:id', HouseCtrl.listId)
router.delete('/delete/:id', HouseCtrl.delete)
router.put('/update/:id', HouseCtrl.update)
router.get('/searchHouse/:criterio', HouseCtrl.searchHouse)




module.exports = router
