let nums = process.argv.slice(2);
nums = (nums.map(Number));

let sum = 0;

for (const num of nums) {
  sum += num;
}

console.log(sum);

// Here's the official solution in case you want to compare notes:
//
// ─────────────────────────────────────────────────────────────────────────────
//
//    'use strict'
//
//    let result = 0
//
//    for (let i = 2; i < process.argv.length; i++) {
//      result += Number(process.argv[i])
//    }
//
//    console.log(result)
