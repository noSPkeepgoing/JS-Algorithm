let fs = require('fs');
const [, ...words] = fs
  .readFileSync('sorting/input.txt')
  .toString()
  .trim()
  .split('\n');

const s_words = new Set(words);
const answer = [...s_words].sort().sort((a, b) => {
  if (a.length === b.length) return;
  else return a.length - b.length;
});

console.log(answer.join('\n'));
