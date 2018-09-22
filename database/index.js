const pg = require('pg');
const Sequelize = require('sequelize');

const connection = new Sequelize('starkloud', 'jbui', 'stark', {
  host: 'db',
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