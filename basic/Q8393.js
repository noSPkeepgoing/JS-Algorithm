let fs = require('fs');
const input = fs.readFileSync('basic/baekjoon/input.txt').toString();
const n = Number(input);
let res = 0;

for (let i = 1; i <= n; i++) res += i;
console.log(res);

// console.log((n * (n + 1)) / 2);
