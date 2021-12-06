const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema ({
    
    idPok: {type:Number, required:[true,'Nombre Obligatorio']},
    email: String,
    idUser: String,
    team: Number,
})


module.exports = mongoose.model('Pokemon', PokemonSchema)