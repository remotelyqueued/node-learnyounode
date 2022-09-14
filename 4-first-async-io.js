const fs = require('fs');
const file = process.argv[2];
const encoding = 'utf-8';

fs.readFile(file, encoding, callback);

function callback(error, data) {
    if (error) return console.log(error);
    const lines = data.split('\n').length - 1;
    console.log(lines);
}
