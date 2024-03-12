let fs = require('fs');
const [, ...coordinates] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((c) => c.split(' ').map(Number));

const answer = coordinates
  .sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  .join('\n')
  .replaceAll(',', ' ');

console.log(answer);
