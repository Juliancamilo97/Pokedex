const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema ({
    
    name: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    rol: String,
    date: {type:Date, default:Date.now}
})

module.exports = mongoose.model('User', UserSchema)