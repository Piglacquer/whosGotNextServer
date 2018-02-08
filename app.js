const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
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

app.delete('/:id', (request, response) => {
	queries
		.removePlayer(request.params.id)
		.then(() => {
			response.sendStatus(200)
		})
		.catch(console.error)
})

app.use((request, response) => {
	response.sendStatus(404)
})

module.exports = app
