let express = require("express");
let app = express();

console.log("Hello world");

app.get("/", (request, response) => {
  response.send("Hello Express 2");
});

module.exports = app;
