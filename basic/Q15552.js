let fs = require('fs');
const [t, ...nums] = fs
  .readFileSync('basic/baekjoon/input.txt')
  .toString()
  .split('\n');

let res = '';
for (let i = 0; i < t; i++) {
  const [a, b] = nums[i].split(' ').map(Number);
  res += a + b + '\n';
}

console.log(res);

// const res = nums
//   .map((num) => {
//     const [a, b] = num.split(' ');
//     return a * 1 + b * 1;
//   })
//   .join('\n');

// console.log(res);
