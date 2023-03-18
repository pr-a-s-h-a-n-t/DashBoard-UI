console.log("  learn node js");
 
//Module is similar to library i.e, already written code
// http --> http module --> require()
// os --> operating system 
// fs --> FileSystem

//http
const http = require("http");

const server = http.createServer((req, resp) => {
    //req: request pprocess
    //resp: for writing responses 

    resp.writeHead(200, { 'Content-Type': 'text/html' });
    req.write("server is running!");
     
    req.write("<button>Click me!</button>");
    resp.end("writinq has been stopped!");
});

server.listen(5000);