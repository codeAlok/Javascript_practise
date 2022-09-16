

const fs = require("fs");  // node module to access filesystem

// creating a new file or overwrite existing file
// fs.writeFileSync("read.txt", "Welcome to my pc");

// overwrite dato existing file
// fs.writeFileSync("read.txt", "Alok kumar, Welcome to my pc");

// add on to existing file content
// fs.appendFileSync('read.txt', " how are you I am fine thank you :)");

const buf_data = fs.readFileSync('read.txt'); //buffer data as binary digit
console.log(buf_data);

// NOde.js includes an additional data type called buffer
//(not available in browser's Javascript)
//Buffer is mainly used to store binary data.
// while reading from a file or receiving packets over the network.

const  org_data = buf_data.toString();  // original data show
console.log(org_data);

fs.renameSync('read.txt', 'readwrite.txt');  // rename file name




