let fs = require('fs');
let input = fs.readFileSync('basic/baekjoon/input.txt').toString().split(' ');
const [h, m] = input;
const alarm_m = h * 60 + m * 1 - 45;
if (alarm_m < 0) console.log(23, 60 + alarm_m);
else console.log(parseInt(alarm_m / 60), alarm_m % 60);
