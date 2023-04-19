const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, function(err, contents){
    if (err) {
        return console.log(err)
      }
    var numberOfLines = contents.toString().split('\n').length - 1;
    console.log(numberOfLines);
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     'use strict'
//     const fs = require('fs')
//     const file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
