module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/knex-demo'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/knex-demo'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
