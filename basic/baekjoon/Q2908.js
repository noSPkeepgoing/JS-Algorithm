let fs = require('fs');
const [a, b] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split(' ');

const r_a = a.split('').reverse().join('');
const r_b = b.split('').reverse().join('');

console.log(Math.max(r_a, r_b));
