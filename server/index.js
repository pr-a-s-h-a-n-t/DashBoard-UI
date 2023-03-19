console.log("  learn node js");

//Module is similar to library i.e, already written code
// http --> http module --> require()
// os --> operating system
// fs --> FileSystem

//http
const http = require("http");

const server = http.createServer((req, resp) => {
  //req: request process
  //resp: for writing responses

  resp.writeHead(200, { "Content-Type": "text/html" });
  // req.write("server is running!");

  // req.write("<button>Click me!</button>");
  console.log("where should i output in browser or in vs code terminal") // now console  will output in  vs code terminal not in browser becz we are node js to execute our js script!
  resp.end("writing has been stopped!");
});

server.listen(5000);
