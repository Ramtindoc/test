const http = require("http");

http
  .createServer(function (req, res) {
    req.write("hellow world");
  })
  .listen(3000);
