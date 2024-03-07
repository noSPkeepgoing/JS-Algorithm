let fs = require('fs');
const n = fs.readFileSync('basic/baekjoon/input.txt').toString() * 1;

for (let i = 1; i < 10; i++) console.log(`${n} * ${i} = ${n * i}`);
