const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.get('/', (request, response) => {
	queries
		.listPlayers()
		.then(players => {
			response.json({ players })
		})
		.catch(console.error)
})

app.post('/', (request, response) => {
	queries
		.addPlayer(request.body)
		.then(players => {
			response.json({ players })
		})
		.catch(console.error)
})

app.delete('/:name', (request, response) => {
	queries
		.removePlayer(request.params.name)
		.then(() => {
			response.sendStatus(204)
		})
		.catch(console.error)
})

app.use((request, response) => {
	response.sendStatus(404)
})

module.exports = app
