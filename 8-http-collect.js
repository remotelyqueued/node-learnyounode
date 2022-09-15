const http = require('http');
const url = process.argv[2];

function callback(response) {
    let string = '';
    response.setEncoding('utf-8');
    response.on('data', function (chunk) {
        string += chunk;
    });
    response.on('end', function () {
        console.log(string.length);
        console.log(string);
    });
}

http.get(url, callback);
