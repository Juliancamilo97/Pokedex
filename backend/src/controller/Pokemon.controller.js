const PokemonCtrl={}
const Pokemon = require('../models/Pokemon.models')


PokemonCtrl.create= async(req,res)=>{

    const {idPok, team, idUser}= req.body
    const NewPokemon= new Pokemon ({
        idPok,
        team,
        idUser
    })

    const answer = await NewPokemon.save()
    res.json({
        msg: 'Pokemon Guardado',
        answer
    })
}

PokemonCtrl.list = async(req,res) => {
    const resp = await Pokemon.find()
    res.json(resp)
}

PokemonCtrl.listId= async(req,res)=>{
    const id = req.params.id
    const answer = await Pokemon.findById({_id: id})
    res.json(answer)
}

PokemonCtrl.listTeam = async(req,res) => {
    const id = req.params.id
    const resp = await Pokemon.find({team: id})
    res.json(resp)
}

PokemonCtrl.listUser = async(req,res) => {
    const id = req.params.id
    const resp = await Pokemon.find({idUser: id})
    res.json(resp)
}

PokemonCtrl.delete = async (req,res) => {
    const id = req.params.id
    await Pokemon.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Pokémon eliminado'
    })
}

module.exports = PokemonCtrl