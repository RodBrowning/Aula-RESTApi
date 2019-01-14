const clienteModel = require('../models/crmModels')
const { 
	getAllClientes, 
	salvarCliente, 
	removerCliente, 
	atualizarCliente} = require('../controllers/crmControllers')


const rotasClientes = (app)=>{	

	app.get('/clientes',getAllClientes)

	app.post('/novoCliente', salvarCliente)

	app.put('/atualizarCliente/:id_cliente', atualizarCliente)

	app.delete('/removerCliente/:id_cliente',removerCliente)
}

module.exports = rotasClientes