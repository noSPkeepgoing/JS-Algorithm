let fs = require('fs');
const numbers = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers.join(' '));
