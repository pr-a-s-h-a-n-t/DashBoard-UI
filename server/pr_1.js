const url = require("url");
const http = require("http");
const fs = require("fs");

 http.createServer((req, res) => {
  //request//
  //index//
  //about//
  //services//

  const path = req.url;
  if (path == "/") {
    console.log("home page");

    //response me
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const fileContent = fs.readFileSync(".\client\home.html");
    res.write(fileContent);
    res.end();
  } else if (path == "/about") {
    console.log("about page");
  } else if (path == "/services") {
    console.log("service page");
  }
})
 .listen(6000);
