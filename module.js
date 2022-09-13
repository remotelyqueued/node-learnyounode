var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extension, callback) {
    var ext = '.' + extension;

    fs.readdir(directoryName, (err, files) => {
        if (err) return callback(err);

        files.forEach(file => {
            if (path.extname(file) === ext) {
                callback(null, file);
            }
        });
    });
};
