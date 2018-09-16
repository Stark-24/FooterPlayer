const connection = require('./index.js');
const Sequelize = require('sequelize');

const Song = connection.define('song', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING
  },
  media: {
    type: Sequelize.STRING,
    unique: true
  },
  album_art: {
    type: Sequelize.STRING,
    unique: true
  },
  upload_date: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING
  },
  plays: {
    type: Sequelize.INTEGER
  }
})

connection.sync({ force: false });

module.exports = Song;