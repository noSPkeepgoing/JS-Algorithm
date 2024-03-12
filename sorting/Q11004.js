let fs = require('fs');
const input = fs.readFileSync('sorting/input.txt').toString().split('\n');

const [, k] = input[0].split(' ').map(Number);
const a = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(a[k - 1]);
