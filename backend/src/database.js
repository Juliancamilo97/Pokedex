
const mongoose = require('mongoose')

URI = ('mongodb+srv://AdminTuCasa:MiFirstDatabase@ddtucasa.mnxnx.mongodb.net/dbTuCasa?retryWrites=true&w=majority')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then (db => console.log('Base de Datos conectada', db.connection.name))
.catch(error => console.log(error))

module.exports = mongoose