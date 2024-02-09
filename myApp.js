let express = require("express");
let app = express();

console.log("Hello world");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.send("Hello Express 3");
});

module.exports = app;
