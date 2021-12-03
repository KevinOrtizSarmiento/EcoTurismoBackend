const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Lugar = new Schema({
    name: { type: String,  required: true},
    description: { type: String,  required: true},
    url: { type: String,  required: true}
});
const Lugares = mongoose.model("Lugares", Lugar);
module.exports = Lugares;