// Synchronised Method

const {readFileSync,writeFileSync, read, readFile, writeFile} = require('fs');

// const first = readFileSync('./content/first.txt','utf-8');
// const second = readFileSync('./content/subText/testText.txt','utf-8');


// console.log(first);
// console.log(second);

// writeFileSync(`./content/whatAmI.txt`,`I am a hero and benevolent God\nBut most importantly ${first}, ${second}`);

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return
    }
    else{
        console.log(result)
    }
})
