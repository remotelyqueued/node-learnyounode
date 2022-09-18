const http = require('http');
const url = process.argv[2];

http.get(url, callback);

function callback(response) {
    let string = '';
    response.setEncoding('utf-8');
    response.on('data', chunk => (string += chunk));
    response.on('end', () => {
        console.log(string.length);
        console.log(string);
    });
}

// official solution
// var http = require('http');
// var bl = require('bl');
// http.get(process.argv[2], function (response) {
//     response.pipe(
//         bl(function (err, data) {
//             if (err) {
//                 return console.error(err);
//             }
//             data = data.toString();
//             console.log(data.length);
//             console.log(data);
//         })
//     );
// });
