const rotasGerais = (app)=>{
	app.route('/').get((req, res)=> res.send('Worked'))
}

module.exports = rotasGerais