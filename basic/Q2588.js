let fs = require('fs');
const input = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split('\n');
const a = Number(input[0]);
const b = Number(input[1]);
const [b1, b2, b3] = input[1].split('');

console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
console.log(a * b);
