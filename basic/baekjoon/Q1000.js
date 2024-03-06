// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input;
// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   const [a, b] = input;
//   console.log(Number(a) + Number(b));
//   process.exit();
// });

let fs = require('fs');
const [a, b] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split(' ');
console.log(parseInt(a) + parseInt(b));
