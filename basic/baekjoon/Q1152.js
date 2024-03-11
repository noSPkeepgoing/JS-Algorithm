let fs = require('fs');
const input = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split(' ');

const answer = input.filter((i) => i !== '');
console.log(answer.length);
