// https://nodeschool.io/
// https://github.com/workshopper/learnyounode
var myModule = require('./module.js');

var directory = process.argv[2];
var ext = '.' + process.argv[3];

myModule(directory, ext, (err, data) => {
    if (err) return;
    console.log(data);
});
