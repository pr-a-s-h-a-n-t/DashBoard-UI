//  -------write file----------

const fs = require("fs");

let content = "this is going to be written";

//  fs.writeFile("file_name",data_to_be_written , call_back_function)

//synchronously
fs.writeFile("new_Readme.txt", content, (err) => {
  if (err) {
    console.log("i am going to execute last becz i am async in nature");
    console.log("wait there is a problem in writing the file");
    console.log("error message --->", err);
  } else {
    console.log("i am going to execute last becz i am async in nature");
    console.log("success! ");
  }
});

console.log("i am going to execute first, becz i am sync code!");

//synchronously
// fs.writeFileSync("file_name",data_to_be_written , call_back_function)

 