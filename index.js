const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi everyone, Have a great day!!");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
