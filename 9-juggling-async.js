const http = require('http');
const urls = process.argv.slice(2);

// method 1
getresult(urls[0])
    .then(result => {
        console.log(result);
        return getresult(urls[1]);
    })
    .then(result => {
        console.log(result);
        return getresult(urls[2]);
    })
    .then(result => console.log(result));

function getresult(url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let string = '';
            response.setEncoding('utf-8');
            response.on('data', chunk => (string += chunk));
            response.on('end', () => resolve(string));
        });
    });
}

// method 2
// const requests = urls.map(
//     url =>
//         new Promise((resolve, reject) => {
//             http.get(url, response => {
//                 let string = '';
//                 response.setEncoding('utf-8');
//                 response.on('data', chunk => (string += chunk));
//                 response.on('end', () => resolve(string));
//             });
//         })
// );
// Promise.all(requests).then(responses =>
//     responses.forEach(response => console.log(response))
// );

// method 3
// const geturl = function (url) {
//     return new Promise((resolve, reject) => {
//         http.get(url, response => {
//             let string = '';
//             response.setEncoding('utf-8');
//             response.on('data', chunk => (string += chunk));
//             response.on('end', () => resolve(string));
//         });
//     });
// };
// const promises = [geturl(urls[0]), geturl(urls[1]), geturl(urls[2])];
// Promise.all(promises).then(values => {
//     values.forEach(value => {
//         console.log(value);
//     });
// });

// official solution
// var http = require('http');
// var bl = require('bl');
// var results = [];
// var count = 0;

// function printResults() {
//     for (var i = 0; i < 3; i++) {
//         console.log(results[i]);
//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(
//             bl(function (err, data) {
//                 if (err) {
//                     return console.error(err);
//                 }

//                 results[index] = data.toString();
//                 count++;

//                 if (count === 3) {
//                     printResults();
//                 }
//             })
//         );
//     });
// }

// for (var i = 0; i < 3; i++) {
//     httpGet(i);
// }
