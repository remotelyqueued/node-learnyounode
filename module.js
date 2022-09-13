var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extension, callback) {
    fs.readdir(directoryName, (error, files) => {
        if (error) return callback(error);
        files = files.filter(file => {
            return path.extname(file) === '.' + extension;
        });
        callback(null, files);
    });
};
