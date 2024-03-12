let fs = require('fs');
const [n, ...rest] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

let answer = 0;

for (let i = 0; i < Number(n); i++) {
  let cnt = 1;
  rest[i].split('').reduce((a, b) => {
    if (a !== b) cnt += 1;
    return b;
  });
  const set = new Set(rest[i]);
  if (cnt === set.size) answer += 1;
}

console.log(answer);
