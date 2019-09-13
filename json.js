const createReadStream = require('fs').createReadStream; // en function som läser in
const createWriteStream = require('fs').createWriteStream; // en function som skriver ut
const csvjson = require('csvjson'); //använder oss av json bibliotek
const toObject = csvjson.stream.toObject(); // transformstreams som läser in all inmatning och gör om det till data
const stringify = csvjson.stream.stringify();
createReadStream('Bok1.csv', 'utf-8') //läser in min csv fil
    .pipe(toObject)
    .pipe(stringify)
    .pipe(createWriteStream('./jsonfil.json')); // skriver ut min csv som en jsonfil
