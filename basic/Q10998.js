let fs = require('fs');
const [a, b] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split(' ');
console.log(a * b);
