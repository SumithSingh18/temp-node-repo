// const { log } = require('console');
// const { readFile, writeFile } = require('fs');

// console.log('start');

// readFile('./content/first.txt', 'utf-8', (err, firstContent) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     readFile('./content/subtext/testText.txt', 'utf-8', (err, secondContent) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         log(firstContent);

//         writeFile('./content/result-async.txt', firstContent, (err) => {
//             if (err) {
//                 console.log(err);
//                  return;
//             }
//             console.log('Content written to result-async.txt');
//         });
//     });
// });


// Synchronised Method

// const { readFileSync, writeFileSync, read, readFile, writeFile } = require('fs');

// const first = readFileSync('./content/first.txt','utf-8');
// const second = readFileSync('./content/subText/testText.txt','utf-8');


// console.log(first);
// console.log(second);

// writeFileSync(`./content/whatAmI.txt`,`I am a hero and benevolent God\nBut most importantly ${first}, ${second}`);

// readFile('./content/subText/testText.txt', 'utf8', (err, result) => {
    // if (err) {
    //     return
    // }
    // console.log(result)




// const second = result;

// writeFile('./content/subtext/result-async.txt', 'Charles Christopher White Jr.[4][5] (born August 2, 1994), better known as MoistCr1TiKaL (pronounced "moist critical"), Cr1TiKaL, or simply Charlie, is an American YouTuber, Twitch streamer, musician and actor. ',
//  (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result)
//     })
// })




