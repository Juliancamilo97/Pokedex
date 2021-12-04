const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verificateToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }

    const token = req.headers.authorization
    if(token===null) {
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }

    jwt.verify(token, 'Secret', (error,result)=> {
        if (error) 
            return res.json({
                mensaje: 'No estas autorizado'
            })
        next();
    })
}

module.exports = Auth