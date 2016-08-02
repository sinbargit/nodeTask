var file = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(file);
console.log(buf.toString().split('\n').length-1);