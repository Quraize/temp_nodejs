//Globals - No window

//__dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// process - info abt env where the program is being executed
// module - info about current module (file)

console.log(__dirname);
console.log(__filename);

setInterval(displayMess, 1000)
function displayMess() {
    console.log("Using Fucntion");
}

//arrow func
setInterval(() => {
console.log("Hello World");    
}, 1000);
