const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "root",
      password: "root",
      database: "saveme",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
