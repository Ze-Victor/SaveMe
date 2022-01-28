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
    connection: {
      host: "ec2-3-216-113-109.compute-1.amazonaws.com",
      port: 5432,
      user: "vxuzbrrlvkfdbk",
      password:
        "abb8630ab5cb0cce43d6ad0f2789d02637c89386b4f08ca7208de133f2df2868",
      database: "d6cd1kl0eqardl",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
