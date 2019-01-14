const clienteModel = require('../models/crmModels')

var getAllClientes = (req, res)=>{
	clienteModel.find({},(err, clientes)=>{
		if(err){
			console.log(err)
		}else{
			res.json(clientes)
		}
	})
}

var salvarCliente = (req, res)=>{
	var novoCliente = new clienteModel(req.body)
	novoCliente.save((err, clienteSchema)=>{
		if(err){
			res.send(err)
		}else{
			res.json(novoCliente)
		}
	})
}

var removerCliente = (req, res)=>{
	clienteModel.findByIdAndRemove(req.params.id_cliente,(err, cliente)=>{
		if(err){
			res.send(err)
		}else{
			res.json(cliente)
		}
	})
}

var atualizarCliente = (req, res)=>{
	clienteModel.findByIdAndUpdate(req.params.id_cliente, req.body, {new:true},(err, cliente)=>{
		if(err){
			res.send(err)
		}else{
			res.json(cliente)
		}
	})
}

module.exports = { 
	getAllClientes, 
	salvarCliente,
	removerCliente,
	atualizarCliente
}