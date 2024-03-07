let fs = require('fs');
const n = fs.readFileSync('basic/baekjoon/input.txt').toString() * 1;
let star = '';

for (let i = 1; i <= n; i++) {
  star += '*';
  console.log(star);
}
