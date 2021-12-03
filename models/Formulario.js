const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Formulario = new Schema({
  name: { type: String},
  email: { type: String},
  lugar: { type: String},
  fecha: { type: String },
  person: { type: String },
  dia: { type: String},
});

const Form = mongoose.model("Formulario", Formulario);

module.exports = Form;
