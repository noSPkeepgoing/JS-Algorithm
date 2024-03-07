let fs = require('fs');
const [n, score] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

const m = Math.max(...score.split(' ').map(Number));
const new_score = score.split(' ').map((t) => (t / m) * 100);
const answer = new_score.reduce((a, b) => a + b) / Number(n);

console.log(answer);
