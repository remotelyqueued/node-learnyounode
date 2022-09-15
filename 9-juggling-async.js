const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

function callback(response) {
    let string = '';
    response.setEncoding('utf-8');
    response.on('data', function (chunk) {
        string += chunk;
    });
    response.on('end', function () {
        console.log(string);
    });
}
