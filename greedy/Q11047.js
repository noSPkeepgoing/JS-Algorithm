let fs = require('fs');
let [q, ...m] = fs
  .readFileSync('greedy/input.txt')
  .toString()
  .trim()
  .split('\n');

const money = m.map(Number);

let [n, k] = q.split(' ').map(Number);
let cnt = 0;

for (let i = n - 1; i >= 0; i--) {
  if (money[i] > k) continue;
  cnt += parseInt(k / money[i]);
  k = k % money[i];
}

console.log(cnt);
