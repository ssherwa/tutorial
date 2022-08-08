const {readFileSync, writeFileSync} = require('fs');

console.log("startt");

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')


writeFileSync('./content/resulr.txt',`here is the result: ${first}, ${second}`,{flag:'a'})

console.log('done with it');
console.log("startinf with the next");