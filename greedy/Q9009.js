let fs = require('fs');
let [t, ...c] = fs
  .readFileSync('greedy/input.txt')
  .toString()
  .trim()
  .split('\n');

t = t * 1;
c = c.map(Number);

const pibo_arr = [0, 1];
while (pibo_arr[pibo_arr.length - 1] < 1e9) {
  pibo_arr.push(pibo_arr[pibo_arr.length - 1] + pibo_arr[pibo_arr.length - 2]);
}

for (let i = 0; i < t; i++) {
  let answer = [];
  let num = c[i];
  while (num > 0) {
    let last = pibo_arr.findIndex((e) => e > num);
    num -= pibo_arr[last - 1];
    answer.push(pibo_arr[last - 1]);
  }
  console.log(answer.reverse().join(' '));
}
