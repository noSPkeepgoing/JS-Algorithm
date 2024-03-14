// 백준 ver
let fs = require('fs');
let input = fs.readFileSync('greedy/input.txt').toString().trim().split('-');

const n_arr = input
  .map((n) => {
    if (n.includes('+')) {
      return n
        .split('+')
        .map(Number)
        .reduce((a, b) => a + b);
    }
    return Number(n);
  })
  .reduce((a, b) => a - b);

console.log(n_arr);

// // eval 활용
// let fs = require('fs');
// let input = fs.readFileSync('dev/stdin').toString().trim().split('-');

// const n_arr = input.map((n) => eval(n)).reduce((a, b) => a - b);

// console.log(n_arr);
