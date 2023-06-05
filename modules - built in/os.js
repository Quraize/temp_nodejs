//built-in modules - OS

const os = require('os')    //creating the variable to access all the methods

const user = os.userInfo()

console.log(user)

console.log(`The system is running for ${os.uptime()}`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS) 