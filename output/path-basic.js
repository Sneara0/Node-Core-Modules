
const path= require('path');
console.log('current file info:\n')
console.log('file name',__filename);
console.log('dir name', __dirname);

console.log("\n" + "-".repeat(20) + "\n")
const filePath='/sneara/document/nextLevel.pdf';
console.log('analyzing path:',filePath,'\n');
console.log('Directory:',path.dirname(filePath));
console.log('Base name:',path.basename(filePath));
console.log("\n" + "-".repeat(20) + "\n")
console.log('file extension:',path.extname(filePath));
console.log('file name:',path.basename(filePath,path.extname(filePath)))


