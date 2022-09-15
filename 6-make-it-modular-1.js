const mymodule = require('./6-make-it-modular-2.js');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, callback);

function callback(error, data) {
    if (error) console.log('Error:', error);
    data.forEach(file => {
        console.log(file);
    });
}
