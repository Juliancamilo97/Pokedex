const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HouseSchema = new Schema ({
    
    sector: {type:String, required:[true,'Nombre Obligatorio']},
    meters: Number,
    type: String,
    state: String,
    adress: String,
    cityName: String,
    date: {type:Date, default:Date.now}
})


module.exports = mongoose.model('House', HouseSchema)