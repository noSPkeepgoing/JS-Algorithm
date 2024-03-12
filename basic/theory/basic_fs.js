// 파일 전체 읽어오기
let fs = require('fs');
let input = fs.readFileSync('basic/test.txt').toString().split('\n');
console.log(input);
