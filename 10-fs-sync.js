const {readFileSync,writeFileSync, write}  = require('fs')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/subtext/testText.txt','utf-8');


writeFileSync(
    './content/whatAmI.txt',
    `Here is the result: ${first}, ${second} `,
    {flag : 'a'} 
)

console.log('done with the task');
console.log('starting next');
const writeF = readFileSync('./content/whatAmI.txt','utf-8');
console.log(writeF) 