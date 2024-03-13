let fs = require('fs');
const [, ...users] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n');

const user_arr = users.map((e) => e.split(' '));
user_arr.sort((a, b) => Number(a[0]) - Number(b[0]));

user_arr.map((e) => console.log(e.join(' ')));
