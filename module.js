var fs = require('fs');
var path = require('path');

module.exports = function readDir(directoryName, extension, callback) {
    extension = '.' + extension;

    fs.readdir(directoryName, (err, files) => {
        if (err) callback(err);

        files.forEach(file => {
            if (path.extname(file) === extension) {
                callback(null, file);
            }
        });
    });
};
