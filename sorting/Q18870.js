let fs = require('fs');
const [n, ...x] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n');

const x_arr = x[0].split(' ').map(Number);
const c_arr = [...new Set(x_arr)].sort((a, b) => a - b);

let m_arr = new Map();
for (let i = 0; i < c_arr.length; i++) {
  m_arr.set(c_arr[i], i);
}

let answer = '';
for (let i = 0; i < n; i++) {
  answer += m_arr.get(x_arr[i]) + ' ';
}
console.log(answer);
