exports.up = function(knex, Promise) {
	return knex.schema.createTable('players', players => {
		players.increments()
		players.string('name')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('players')
}
