const fs = require('fs');

// fs.appendFile = function(path, callback) 

const appendingStr = "this is line is going to appended in existing file"

fs.appendFile("./Readme.txt", appendingStr,  (err)=> {
    if(err){
        console.log("Error--> some this wrong");
    }
    else{
        console.log("success file appended");
    }
})
