let fs = require('fs');
const nums = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split('\n')
  .map(Number);

const max_num = Math.max(...nums);
console.log(max_num);
console.log(nums.indexOf(max_num) + 1);
