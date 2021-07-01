module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'backend',
      user: 'root',
      password: 'root'
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
