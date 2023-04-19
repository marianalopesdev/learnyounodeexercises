const fs = require('fs');

let file = fs.readFileSync(process.argv[2]);

var numberOfLines = file.toString().split('\n').length - 1;

console.log(numberOfLines);


// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     'use strict'
//     const fs = require('fs')

//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)

//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
