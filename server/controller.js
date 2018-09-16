const Song = require('../database/model.js');

module.exports = {
  fetch: (req, res) => {
    Song
      .findAll({ limit: 25 })
      .then(songs => {
        res.status(200).send(songs);
      })
      .catch(err => {
        res.status(404).send('Error obtaining songs', err)
      })
  }
}