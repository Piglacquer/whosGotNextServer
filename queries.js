const database = require('./database_connection.js')

module.exports = {
	listPlayers() {
		return database('players')
	},
	addPlayer(name) {
		return database('players')
			.insert(name)
			.returning('*')
			.then(record => record[0])
	},
	removePlayer(id) {
		return database('players')
			.where('id', id)
			.del()
	}
}
