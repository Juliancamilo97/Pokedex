const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

//Puerto
app.set('Port', process.env.PORT||4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/user', require('./routes/User.route'))
app.use('/house', require('./routes/House.route'))
app.use('/pokemon', require('./routes/Pokemon.route'))



app.listen(app.get('Port'),()=>{
    console.log('El Servidor se esta escuchando por el puerto', app.get('Port'))
})