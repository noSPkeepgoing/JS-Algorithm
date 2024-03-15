let fs = require('fs');
let n = fs.readFileSync('greedy/input.txt').toString().trim() * 1;

const q = parseInt(n / 5);
for (let i = q; i >= 0; i--) {
  let r = n - i * 5;
  if (r / 3 === parseInt(r / 3)) {
    console.log(i + r / 3);
    break;
  }
  if (i === 0) console.log(-1);
}
