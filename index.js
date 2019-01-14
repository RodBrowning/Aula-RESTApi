const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rotasGerais = require('./routes/crmRotasGerais')
const rotasClientes = require('./routes/crmRotasClientes')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clientesBarbearia',{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

rotasGerais(app)
rotasClientes(app)

app.listen(2000,() => console.log('listen on localhost:2000'))