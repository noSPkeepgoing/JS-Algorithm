let fs = require('fs');
let [n, t] = fs.readFileSync('greedy/input.txt').toString().trim().split('\n');

const t_arr = t
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += t_arr[i] * (n - i);
}

console.log(answer);
