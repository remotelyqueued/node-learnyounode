// https://nodeschool.io/
// https://github.com/workshopper/learnyounode

var mymodule = require('./module.js');

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});
