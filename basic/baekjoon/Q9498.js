let fs = require('fs');
const input = fs.readFileSync('basic/baekjoon/input.txt').toString();
const score = Number(input);
let grade = 'F';

if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else if (score >= 60) grade = 'D';

console.log(grade);
