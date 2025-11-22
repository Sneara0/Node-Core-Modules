const { error } = require('console');
const fs= require('fs');
const content1='This is a content \n  node.js is awesome !!! ';

try{
    fs.writeFileSync ('./text-sync.txt',content1,'utf-8');
    console.log('file written sync')

} catch(error){
    console.error(error.message);

}



const content2='This is another content \n i love programming !!!';
fs.writeFile('./text-async.txt',content2,'utf-8',(error)=>{
    if(error){
        console.error( error.message)
    } else{
        console.log('file written async')
    }
})

