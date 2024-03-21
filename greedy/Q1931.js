let fs = require('fs');
let [n, ...m] = fs
  .readFileSync('greedy/input.txt')
  .toString()
  .trim()
  .split('\n');

const arr = m.map((e) => e.split(' ').map(Number));
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let cnt = 1;
let cur_fin = arr[0][1];
for (let i = 1; i < n * 1; i++) {
  if (arr[i][0] >= cur_fin) {
    cnt++;
    cur_fin = arr[i][1];
  }
}

console.log(cnt);
