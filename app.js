////node.js module http

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("welcome homepage!!!");
//   res.end();
// });

// server.listen(5566, () => {
//   console.log("server is runnong on port 5566!!!");
// });

// express.js

const express = require("express");
const app = express();

app.get("/firstpage", (req, res) => {
  res.send("歡迎來到首頁");
});

app.get("/secondpage", (req, res) => {
  res.send("歡迎來到第二頁");
});

app.listen(5566, () => {
  console.log("伺服器正在聆聽port 5566......");
});
