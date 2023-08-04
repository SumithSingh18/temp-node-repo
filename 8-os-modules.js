// OS Modules

const os = require('os')

//info about user
const user = os.userInfo();

// method gives system uptime in seconds

const uptime = os.uptime()/3600;
console.log(`Uptime: ${Math.round(uptime)}hours`)

const currentOS = {
    name :os.type(),
release : os.release(),
totalMem : os.totalmem(),
freeMem : os.freemem()
};

console.log(currentOS)