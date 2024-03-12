let fs = require('fs');
let input = fs.readFileSync('basic/baekjoon/input.txt').toString().split('\n');
const [c, n] = input;
const [c_h, c_m] = c.split(' ');

const oven_t = c_h * 60 + c_m * 1 + n * 1;
console.log(parseInt(oven_t / 60) % 24, oven_t % 60);
