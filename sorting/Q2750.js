let fs = require('fs');
const [, ...nums] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const answer = nums.sort((a, b) => a - b).join('\n');

console.log(answer);
