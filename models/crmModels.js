var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
	nome: String,
	qntCortes: Number,
	total: { type: Number, default: 10}
})


var clienteModel = mongoose.model('cliente', clienteSchema)

module.exports = clienteModel;