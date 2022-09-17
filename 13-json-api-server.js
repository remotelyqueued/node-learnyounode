const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = Number(process.argv[2]);

http.createServer((request, response) => {
    const urlObject = url.parse(request.url, true);

    if (urlObject.pathname == '/api/parsetime') {
        const isoString = urlObject.query.iso;
        const date = new Date(isoString);

        const returnDate = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };

        response.writeHead(200, {
            'Content-Type': 'application/json',
        });

        console.log(JSON.stringify(returnDate));
        response.end(JSON.stringify(returnDate));
    } else if (urlObject.pathname === '/api/unixtime') {
        const isoString = urlObject.query.iso;
        const date = new Date(isoString);

        const returnDate = {
            unixtime: date.getTime(),
        };

        response.writeHead(200, {
            'Content-Type': 'application/json',
        });

        console.log(JSON.stringify(returnDate));
        response.end(JSON.stringify(returnDate));
    } else {
        response.end('Nothing of value was received.');
    }
}).listen(port);

// cors errors in test browser
// connection refused in verify
// .listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

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
