const fs = require("fs");

//unlink("file_name", (err) =>{})

fs.unlink("new_Readme.txt", function (err) {
  if (err) {
    console.log("i am going to execute last becz i am async in nature");
    console.log("something is wrong 😕 -->", err);
  } else {
    console.log("i am going to execute last becz i am async in nature");

    console.log("success! --> file deleted");
  }
});

console.log("i am going to execute first, becz i am sync code!");
