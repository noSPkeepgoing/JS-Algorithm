let fs = require('fs');
const [c, ...n] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .trim()
  .split('\n');

let result = '';

for (let i = 0; i < Number(c); i++) {
  const test = n[i].split(' ').map(Number);
  const [total_num, ...num] = test;
  const average = num.reduce((a, b) => a + b) / total_num;
  const filter_num = num.filter((s) => s > average).length;
  result += ((filter_num / total_num) * 100).toFixed(3) + '%' + '\n';
}

console.log(result);
