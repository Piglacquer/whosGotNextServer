module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///whosGotNext'
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
}
