const path = require("path");
require("dotenv").config();

const databaseConfiguration = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "./mydb.sqlite"),
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "../../migrations"),
  },
  useNullAsDefault: true,
  debug: false,
};

module.exports = databaseConfiguration;
