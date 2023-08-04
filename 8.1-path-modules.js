// Path Modules

const path = require('path')
console.log(path.sep);

const file = path.join('subText','testText.txt')
console.log(file);

const base = path.basename(file);
console.log(base);

const abs = path.resolve(__dirname,"subText","testText.txt");
console.log(abs)

