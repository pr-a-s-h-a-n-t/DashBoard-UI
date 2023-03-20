const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //request//
    //index//
    //about//
    //services//

    const path = req.url;
    if (path == "/") {
      console.log("home page  ");

      try {
        res.writeHead(200, {
          "content-type": "text/html",
        });

        fs.readFile("pages/home.html", (err, data) => {
          if (err) {
            console.log("wait there is a problem");
            console.log(err);
          } else {
            console.log(data); //data wil come in buffer
            return res.write(data.toString());
            // console.log(data.toString()); //convert it into a string
          }
        });

        // res.write(fileContent);

        // res.end();
      } catch (e) {
        console.log(e, "error");
      }
    } else if (path == "/services") {
      console.log("services page ");
    } else if (path == "/about") {
      console.log("about page");
      res.write("./services/about");
    }
  })
  .listen(8082);
