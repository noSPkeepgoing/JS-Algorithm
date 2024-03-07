let fs = require('fs');
const [t, n] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split('\n');

const numbers = n.split(' ').map(Number);
console.log(Math.min(...numbers), Math.max(...numbers));
