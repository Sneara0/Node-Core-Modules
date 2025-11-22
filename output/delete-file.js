const { error } = require('console');
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

fs.writeFile("./temp2.txt", "another temporary file content", (err) => {
    if (err) return console.error(err.message);

    console.log("temp file created asynchronously");

    fs.unlink("./temp2.txt", (err) => {
        if (err) {
            console.error("error:", err.message);
        } else {
            console.log("temp file deleted asynchronously");
        }
    });
});
