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

//how to use static file
app.use(express.static("public"));
//use EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/formHandling", (req, res) => {
  let { username, age } = req.query;
  res.render("response", { username, age });
});

// app.get("/:fruit", (req, res) => {
//   res.render("index", { fruit: req.params.fruit });
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/firstpage", (req, res) => {
//   res.send("歡迎來到首頁");
// });

// app.get("/secondpage", (req, res) => {
//   res.send("歡迎來到第二頁");
// });

// app.get("/sendFile", (req, res) => {
//   res.sendFile(__dirname + "/sendFile.html");
// });

// app.get("/json", (req, res) => {
//   let obj = {
//     englishName: "Zuli Chen",
//     browser: "Safari",
//   };
//   res.json(obj);
// });

// app.get("/redirect", (req, res) => {
//   res.redirect("/secondpage");
// });

// app.get("/fruit", (req, res) => {
//   res.send("welcome to  fruit page");
// });

// app.get("/fruit/:anyFriut", (req, res) => {
//   res.send("welcome to " + req.params.anyFriut + " page");
// });

// app.get("/formHandling", (req, res) => {
//   res.send(
//     `已收到表單，使用者名稱為${req.query.username}，年齡為${req.query.age}`
//   );
// });

app.get("*", (req, res) => {
  res.send("<h1>404 not found</h1>");
});

app.listen(5566, () => {
  console.log("伺服器正在聆聽port 5566......");
});
