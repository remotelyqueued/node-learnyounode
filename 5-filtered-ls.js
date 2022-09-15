const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directory, callback);

function callback(error, list) {
    if (error) return console.log(error);
    list.forEach(file => {      
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
}
