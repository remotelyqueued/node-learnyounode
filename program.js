// https://nodeschool.io/
// https://github.com/workshopper/learnyounode
const fs = require('fs');

let bufferObject = fs.readFileSync(process.argv[2]);

let lines = bufferObject.toString().split('\n').length - 1;

console.log(lines);
