const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tasks-db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;
