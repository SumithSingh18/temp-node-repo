console.log("My NodeJS Tutorial");
/**GLOBALS- No Windows
 * __dirname - path to current directory
 * __filename - file name
 * require - function to use modules (CommonJS)
 * module - info about current module(file)
 * process - info about env where the program is being executed
 * 
 * 
 * 
 */


// setInterval(()=>{
//   console.log("Hello world");
// },1000)

// Modules

const names = require('./firstModules')
console.log(names);
console.log(names.parker);
console.log(names.john);

const rew = require('./6-falvo')
console.log(rew.items)


const myGames = require('./4-favouriteGames')
console.log(myGames)

// module 7

require('./7-mindGrenade');

