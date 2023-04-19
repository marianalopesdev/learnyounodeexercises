const myMod = require('./mymodule.js');

myMod(process.argv[2], process.argv[3], function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
      console.log(file)
    })
  })

//   Here's the official solution in case you want to compare notes:

//   ─────────────────────────────────────────────────────────────────────────────
//    _C:\Users\Mari\AppData\Roaming\npm\node_modules\learnyounode\exercises\mak
//    e_it_modular\solution\solution.js_ :
  
  
//       'use strict'
//       const filterFn = require('./solution_filter.js')
//       const dir = process.argv[2]
//       const filterStr = process.argv[3]
  
//       filterFn(dir, filterStr, function (err, list) {
//         if (err) {
//           return console.error('There was an error:', err)
//         }
  
//         list.forEach(function (file) {
//           console.log(file)
//         })
//       })
  
//   ─────────────────────────────────────────────────────────────────────────────
//    _C:\Users\Mari\AppData\Roaming\npm\node_modules\learnyounode\exercises\mak
//    e_it_modular\solution\solution_filter.js_ :
  
  
//       'use strict'
//       const fs = require('fs')
//       const path = require('path')
  
//       module.exports = function (dir, filterStr, callback) {
//         fs.readdir(dir, function (err, list) {
//           if (err) {
//             return callback(err)
//           }
  
//           list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//           })
  
//           callback(null, list)
//         })
//       }