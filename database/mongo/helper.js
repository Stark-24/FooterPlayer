const faker = require('faker');
const fs = require('fs');




const writeSongs = fs.createWriteStream('../writeStreamTestMongo.csv');

let i = 10000000;
write();
function write() {
    let ok = true;
    do {
        let song = i + "," + faker.lorem.word() + "," + faker.lorem.word() + "," + faker.internet.url() + "," + faker.internet.url() + "," + faker.lorem.word() + "," + faker.date.past() + "," + faker.random.number() + '\n';
        if (i === 10000000) {
            song = 'id,' + 'title,' + 'artist,' + 'media,' + 'album_art,' + 'upload_date,' + 'tags,' + 'plays' + '\n' + song;
        }
        i--;
        if (i === 0) {

            writeSongs.write(song, 'utf-8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(i, 'write bb')
                }
            });
        } else {
            if (i % 1000000 === 0) {
                console.log(i);
            }
            ok = writeSongs.write(song, 'utf-8');
        }
    } while (i > 0 && ok);
    if (i > 0) {

        writeSongs.once('drain', write);
    }
}





