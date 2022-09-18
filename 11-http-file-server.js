const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer(callback);

function callback(request, response) {
    const stream = fs.createReadStream(file);
    response.writeHead(200, { 'content-type': 'text/plain' });
    stream.pipe(response);
}

server.listen(port);
