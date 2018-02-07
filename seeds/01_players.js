exports.seed = function(knex, Promise) {
	return knex.raw('ALTER SEQUENCE players_id_seq restart with 4').then(function() {
		return knex('players')
			.del()
			.then(function() {
				return knex('players').insert([
					{ id: 1, name: 'Pootrick' },
					{ id: 2, name: 'Baffle' },
					{ id: 3, name: 'Merk' }
				])
			})
	})
}
