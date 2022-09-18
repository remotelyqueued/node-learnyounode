const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);
const hostname = '127.0.0.1';

http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    if (parsedURL.pathname === '/api/parsetime') {
        let date = new Date(parsedURL.query.iso);
        date = parsetime(date);
        res.writeHead(200, setheaders());
        res.end(JSON.stringify(date));
    } else if (parsedURL.pathname === '/api/unixtime') {
        let date = new Date(parsedURL.query.iso);
        date = unixtime(date);
        res.writeHead(200, setheaders());
        res.end(JSON.stringify(date));
    } else {
        res.end('Nothing of value was received.');
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    };
}

function unixtime(time) {
    return { unixtime: time.getTime() };
}

function setheaders() {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': 86400,
    };
}
