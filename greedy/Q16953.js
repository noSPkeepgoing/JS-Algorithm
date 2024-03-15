let fs = require('fs');
let [a, b] = fs
  .readFileSync('greedy/input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let num = b;
let cnt = 1;
while (num > a) {
  if (num % 2 === 0) {
    cnt += 1;
    num = num / 2;
  } else if (num % 10 === 1) {
    cnt += 1;
    num = (num - 1) / 10;
  } else {
    break;
  }
}

if (num === a) console.log(cnt);
else console.log(-1);
