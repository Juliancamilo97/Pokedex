const UsersCtrl = {}
const User = require('../models/User.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

UsersCtrl.createUser = async(req,res) => {
    const {name, email, password, rol} = req.body
    const NewUser = new User ({
        name,
        email,
        password,
        rol
    })

    const emailUser = await User.findOne({email:email})
    if (emailUser){
        // Comprobación email
        res.json({
            mensaje: 'Ya existe un usuario registrado con ese correo'
        })
    } else {
        // Encriptación contraseña
        NewUser.password = await bcrypt.hash(password, 10)
        const token = jwt.sign({_id:NewUser._id}, "Secret")
        await NewUser.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NewUser._id,
            name: NewUser.name,
            token
        })   

    }

}

UsersCtrl.login = async(req,res) => {
    const {email,password, rol} = req.body
    const user = await User.findOne({email:email})
    if (!user){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(password, user.password)
    if (match){
        const token = jwt.sign({_id:user._id}, 'Secret')
        res.json({
            mensaje: 'Bienvenido',
            id: user.id,
            name: user.name,
            token
        })
    } else {
        res.json({
            mensaje: 'Contraseña Incorrecta'
        })
    }

}


module.exports = UsersCtrl