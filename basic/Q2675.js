let fs = require('fs');
const [t, ...rest] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < t; i++) {
  const [r, s] = rest[i].split(' ');
  let answer = '';
  for (let j = 0; j < s.length; j++) answer += s[j].repeat(r);
  console.log(answer);
}
