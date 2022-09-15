const http = require('http');
const url = process.argv[2];
let data = [];

http.get(url, callback).on('error', console.error);

function callback(response) {
    response.setEncoding('utf-8');
    response.on('data', stream => data.push(stream));
    response.on('error', console.error);
    response.on('end', console.log);
}

function append(stream) {
    date += stream;
}
