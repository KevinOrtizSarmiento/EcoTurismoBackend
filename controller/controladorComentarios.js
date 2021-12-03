const Comentario = require("../models/Comentarios");

module.exports.obtenerComentarios = async (req, res) => {
    const id = req.params.id
    await Comentario.find({id:id}).then(response=>{
        res.json(response)
    }).catch(error=>{
        res.json(error.message)
    })
}
module.exports.ingresarComentario = async (req, res) =>{
    Comentario.find()
    const newComentario = req.body;
    await Comentario.create(newComentario).then(response=>{
        console.log(response);
    }).catch(error=>{
        res.json(error.message)
    })
}