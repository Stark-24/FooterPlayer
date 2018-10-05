const Sequelize = require('sequelize');
const pg = require('pg');

const connection = new Sequelize('starkloud', 'postgres', 'lolklark123', {
  host: 'localhost',
  dialect: 'postgres'
});

connection
  .authenticate()
  .then(() => {
    console.log('Successfully connected to the database!')
  })
  .catch((err) => {
    console.log('Error connecting to the database...', err)
  });

module.exports = connection;