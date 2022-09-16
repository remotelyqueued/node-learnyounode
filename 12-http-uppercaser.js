const http = require('http');
const port = process.argv[2];

http.createServer((request, response) => {
    request.on('error', err => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', err => {
        console.error(err);
    });
    if (request.method === 'POST') {
        let body = [];
        request
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString().toUpperCase();
                response.end(body);
            });
    } else {
        response.end('Send me a POST\n');
    }
}).listen(port);
