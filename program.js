// https://nodeschool.io/
// https://github.com/workshopper/learnyounode
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, (err, contents) => {
    if (err) {
        return console.log(err);
    }
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});
