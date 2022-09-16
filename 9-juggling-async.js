const http = require('http');
const urls = process.argv.slice(2);

// method 3
getResults(urls[0])
    .then(result => {
        console.log(result);
        return getResults(urls[1]);
    })
    .then(result => {
        console.log(result);
        return getResults(urls[2]);
    })
    .then(result => console.log(result));

function getResults(url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let string = '';
            response.setEncoding('utf-8');
            response.on('data', chunk => (string += chunk));
            response.on('end', () => resolve(string));
        });
    });
}

// method 1
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

// method 2

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
