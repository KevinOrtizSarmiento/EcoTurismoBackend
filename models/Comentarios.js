const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Comentarios = new Schema({
    comentario: { type: String, required: true},
    id:{ type: String, required: true}
});

const Coment = mongoose.model("Comentarios", Comentarios);

module.exports = Coment;