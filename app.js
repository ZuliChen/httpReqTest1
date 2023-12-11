const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome homepage!!!");
  res.end();
});

server.listen(5566, () => {
  console.log("server is runnong on port 5566!!!");
});
