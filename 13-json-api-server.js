const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    request.on('error', err => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', err => {
        console.error(err);
    });

    const urlObject = url.parse(request.url, true);

    if (urlObject.pathname === 'api/parsetime') {
        console.log(urlObject.search);
        response.writeHead(200, {
            'Content-Type': 'application/json',
        });
    } else if (urlObject.pathname === 'api/unixtime') {
    } else {
    }
}).listen(Number(process.argv[2]));
