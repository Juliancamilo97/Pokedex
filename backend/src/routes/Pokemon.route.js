const {Router} = require('express')
const router = Router()
const PokemonCtrl = require('../controller/Pokemon.controller')
const Auth = require('../helper/Auth')


router.post('/create', Auth.verificateToken, PokemonCtrl.create)
router.get('/list', Auth.verificateToken, PokemonCtrl.list)
router.get('/listId/:id', Auth.verificateToken, PokemonCtrl.listId)
router.get('/listTeam/:id', Auth.verificateToken, PokemonCtrl.listTeam)
router.get('/listUser/:id', Auth.verificateToken, PokemonCtrl.listUser)
router.delete('/delete/:id', Auth.verificateToken, PokemonCtrl.delete)


module.exports = router
