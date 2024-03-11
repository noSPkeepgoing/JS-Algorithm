let fs = require('fs');
const n = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

const sum = n[1]
  .split('')
  .map(Number)
  .reduce((a, b) => a + b);
console.log(sum);
