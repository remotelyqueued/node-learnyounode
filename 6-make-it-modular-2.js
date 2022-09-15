const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (error, files) => {
        if (error) return callback(error);
        files = files.filter(file => {
            return path.extname(file) === '.' + extension;
        });
        callback(null, files);
    });
};