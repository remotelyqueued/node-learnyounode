const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

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
}).listen(port);

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

// official solution
// var http = require('http');
// var url = require('url');
// function parsetime(time) {
//     return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds(),
//     };
// }
// function unixtime(time) {
//     return { unixtime: time.getTime() };
// }
// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true);
//     var time = new Date(parsedUrl.query.iso);
//     var result;
//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time);
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time);
//     }
//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(result));
//     } else {
//         res.writeHead(404);
//         res.end();
//     }
// });
// server.listen(Number(process.argv[2]));
