let fs = require('fs');
let input = fs.readFileSync('greedy/input.txt').toString().trim().split('\n');

const n = input[0] * 1;
const distance = input[1].split(' ').map(Number);
const price = input[2].split(' ').map(Number);

let total_price = BigInt(price[0]) * BigInt(distance[0]);
let current_price = BigInt(price[0]);
for (let i = 1; i < n - 1; i++) {
  if (current_price > price[i]) current_price = BigInt(price[i]);
  total_price += current_price * BigInt(distance[i]);
}

console.log(String(total_price));
