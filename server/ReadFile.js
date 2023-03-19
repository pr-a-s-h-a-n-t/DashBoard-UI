
//            ------Read file---------
//fs --> module!
 
//below code will run async 
// fs.readFile("file_name", callback_function)
// the callback function will take two parameters 1st- error message and second data  which we get form file
//examples:
const fs = require("fs");
fs.readFiles("./Readme.txt", (err, data) => {
    if(err){
        console.log("wait there is a problem");
        console.log(err);
    }
    else{
        console.log(data);//data wil come in buffer

        console.log(data.toString());//convert it into a string
    }
})

console.log("i am going to execute first");


// to read file in sync way use  readFileSync("file_name",(err, data)=>{})



 