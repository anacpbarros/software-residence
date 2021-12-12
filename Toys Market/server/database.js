const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("products-db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;
