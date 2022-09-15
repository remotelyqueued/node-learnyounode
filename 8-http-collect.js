const http = require('http');
const url = process.argv[2];
const encoding = 'utf-8';
let data = [];

http.get(url, callback).on('error', console.error);

function callback(response) {
    response.setEncoding(encoding);
    response.on('data', function (stream) {
        data.push(stream);
    });
    response.on('error', console.error);
    response.on('end', console.log);
}

function append(stream) {
    date += stream;
}
