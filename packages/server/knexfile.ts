//These values are set when executing the knex command using the .env in the current package folder
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const configuration = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: DATABASE_NAME,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};

export default configuration;
