let fs = require('fs');
const nums = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

const remainder = nums.map((num) => num % 42);
const answer = remainder.filter(
  (num, idx) => remainder.indexOf(num) === idx
).length;

console.log(answer);
