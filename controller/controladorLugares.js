const Lugar = require("../models/Lugar");

module.exports.obtenerLugares = async (req, res) =>{
    await Lugar.find().then(response=>{
        res.json(response);
    })
}
module.exports.obtenerInformacion = async (req, res)=>{
    const id = req.params.id
    await Lugar.findOne({_id:id}).then(async (response)=>{
        await res.send(response)
    })
}
