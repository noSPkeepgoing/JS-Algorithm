let fs = require('fs');
let input = fs
  .readFileSync('greedy/input.txt')
  .toString()
  .trim()
  .split('\n')
  .reverse();

const checkArr = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 0;
  let min_y = arr[0][1];
  arr.forEach(([, y]) => {
    if (y <= min_y) {
      cnt++;
      min_y = y;
    }
  });
  return cnt;
};

const t = input.pop() * 1;
for (let i = 0; i < t; i++) {
  let n = input.pop() * 1;
  let arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(input.pop().split(' ').map(Number));
  }
  const answer = checkArr(arr);
  console.log(answer);
}
