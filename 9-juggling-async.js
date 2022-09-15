const http = require('http');
const urls = process.argv.slice(2);

const geturl = function (url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let string = '';
            response.setEncoding('utf-8');
            response.on('data', chunk => (string += chunk));
            response.on('end', () => resolve(string));
        });
    });
};

const promises = [geturl(urls[0]), geturl(urls[1]), geturl(urls[2])];

Promise.all(promises).then(values => {
    values.forEach(value => {
        console.log(value);
    });
});
