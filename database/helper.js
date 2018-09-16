const Song = require('./model.js');
const data = require('./songdata.json');

data.forEach(song => {
  Song.create({
    id: song.id,
    title: song.title,
    artist: song.artist,
    media: song.media,
    album_art: song.album_art,
    upload_date: song.upload_date,
    tags: song.tags,
    plays: song.plays
  })
  .then(() => console.log('Starkloud\'s song table has been populated'))
  .catch((err) => console.log('Error populating table', err));
});