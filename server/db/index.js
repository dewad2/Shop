'use strict';
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

module.exports = new Sequelize(`postgres://localhost:5432/???`, {
  logging: false // so we don't see all the SQL query made
});
