let fs = require('fs');
const [, ...coordinates] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((c) => c.split(' ').map(Number));

const answer = coordinates
  .sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .join('\n')
  .replaceAll(',', ' ');

console.log(answer);
