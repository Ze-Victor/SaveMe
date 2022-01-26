const path = require("path");

module.exports = {
  client: "pg",
  connection: {
    host: "ec2-3-227-15-75.compute-1.amazonaws.com",
    port: 5432,
    user: "rfjqkoijvwklbr",
    password: "39ae9e6271006294994c24efad734c7602c27f83c98ffb2da7b76e52ae2f0626",
    database: "d36gevr7ll4b8o",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
