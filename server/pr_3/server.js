const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

const server = http.createServer();

//upload a file

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/fileupload") {
    //form submission
    let form = new formidable.IncomingForm();

    form.parse(req, (err, feilds, files) => {
      const oldPath = files.fileToUpload.filepath;
      const newPath =
        __dirname + "/upload/" + files.fileToUpload.originalFilename;

      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        return res.end("file uploaded successfully");
        console.log(res, "---");
      });
    });
  } else {
    //return html form
    fs.readFile("form.html", (err, data) => {
      if (err) throw err;

      res.write(data);
      return res.end();
    });
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
