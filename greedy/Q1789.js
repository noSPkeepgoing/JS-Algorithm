let fs = require('fs');
let s = fs.readFileSync('greedy/input.txt').toString().trim() * 1;

let n = 1;
while (1) {
  s -= n;
  n++;
  if (s < n) {
    console.log(n - 1);
    break;
  } else if (s === n) {
    console.log(n);
    break;
  }
}
