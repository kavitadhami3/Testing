const fs= require('fs');


const files= fs.readdirSync(__dirname);
console.log(`My directory name is ${files}`);



