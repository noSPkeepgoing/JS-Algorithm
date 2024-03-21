let fs = require('fs');
let [n, b] = fs.readFileSync('greedy/input.txt').toString().trim().split('\n');

n = n * 1;
b = b.split(' ').map(Number);

let cnt = 0;
const remove_b = Array(Math.max(...b) + 1).fill(0);

for (let x of b) {
  if (remove_b[x] > 0) {
    remove_b[x]--;
    remove_b[x - 1]++;
  } else {
    cnt++;
    remove_b[x - 1]++;
  }
}

console.log(cnt);
