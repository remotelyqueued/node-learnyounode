const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer(function callback(request, response) {
    // create file stream
    let stream = fs.createReadStream(file);
    // pipe to response
    stream.pipe(response);
});

server.listen(port);
