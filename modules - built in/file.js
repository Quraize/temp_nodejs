// modules to manipulate the files


// SYNCHRONOUS 
/*const mf = require('fs')

//here the varibles first and sec are used to save the incoming content from the files
const first = mf.readFileSync('./text/first.txt','utf-8');
const sec = mf.readFileSync('./text/second.txt', 'ascii');

console.log(first,'\n',sec);

//writing a file
mf.writeFileSync('./text/towrite.txt', `This file is written through Nodejs module(Built-in)`);

const thrd = mf.readFileSync('./text/towrite.txt', 'utf8'); //reading the written file
console.log(thrd);

//writing a file using other files - we are using the first and sec variables because they have the 
// content from thos files we want (this is the technique)
mf.writeFileSync('./text/towrite2', `The file is being written using 'first': ${first} and 'second:' ${sec}`);

const frth = mf.readFileSync('./text/towrite2', 'utf8');
console.log(frth);*/


//ASYNCHRONOUS

const amf = require('fs');

amf.readFile('./text/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
})