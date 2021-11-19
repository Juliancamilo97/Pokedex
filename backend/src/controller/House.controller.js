const HouseCtrl = {}
const House = require('../models/House.models')

HouseCtrl.create = async(req,res) => {
    const {sector, meters, type, state, adress, cityName} = req.body
    const NewHouse = new House({
        sector, 
        meters, 
        type, 
        state, 
        adress, 
        cityName
    })

    const resp = await NewHouse.save()
    res.json({
        mensaje: 'Nueva casa guardada',
        resp
    })
}

HouseCtrl.list = async(req,res) => {
    const resp = await House.find()
    res.json(resp)
}

HouseCtrl.listId = async(req,res) => {
    const id = req.params.id
    const resp = await House.findById({_id: id})
    res.json(resp)
}

HouseCtrl.listCity = async(req,res) => {
    const id = req.params.id
    const resp = await House.find({city: id})
    res.json(resp)
}

HouseCtrl.searchHouse = async(req,res) => {
    const state = req.params.criterio;

    try {
        const resp = await House.find({state:state})
        res.json(resp)
    } catch (error){
        return res.estatus(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
}

HouseCtrl.delete = async (req,res) => {
    const id = req.params.id
    await House.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Casa eliminada'
    })
}


HouseCtrl.update = async (req,res) => {
    const id = req.params.id
    await House.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Casa Actualizada'
    })
}



module.exports = HouseCtrl
