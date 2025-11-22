const fs= require('fs');

fs.writeFileSync("./temp.txt",'Temporary file content');
console.log('temp file created');

if(fs.existsSync('./temp.txt')){
    console.log("file exists");
    fs.unlinkSync('./temp.txt');
    console.log('file deleted');




}


try{
    fs.unlinkSync("./temp.txt");


} catch(err){
    console.log("Error:",err.message)

}


