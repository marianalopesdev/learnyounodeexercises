const fs = require('fs');

var path = require('path');
const files = process.argv[2];

fs.readdir(files,  function(err, list){
    if(err){
        console.log(err);
    }
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
   
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     }) 