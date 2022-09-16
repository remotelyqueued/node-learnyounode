const http = require('http');
const port = process.argv[2];

http.createServer((request, response) => {
    if (request.method === 'POST') {
        let body = [];
        // request object is ReadableStream
        request
            .on('error', error => {
                console.error(err.stack);
            })
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

    // const { headers, method, url } = request;
    // response is an instance of ServerResponse which is a WritableStream
    // response.statusCode = 404;

    // implicit headers
    // response.setHeader('Content-Type', 'text/html');
    // response.setHeader('X-Powered-By', 'bacon');

    // explicit headers
    // response.writeHead(200, {
    //     'X-Powered-By', 'bacon',
    //     'Content-Type', 'application/json'
    // })

    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello, World!</h1>');
    // response.write('</body>');
    // response.write('</html>');
    // response.end();

    // or response.end('html');

    // response.on('error', error => console.error(error));
    // response.writeHead(200, { 'Content-type': 'text/html' });
    // const responseBody = { headers, method, url, body };
    // response.end(string);
}).listen(port);
