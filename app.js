const express = require("express");
const app = express();
const port = 7010;
var http = require("http");

app.get("/", (req, res) => {
  let dr = { status: "sukses" };
  res.json(dr);
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port : ${port}`);
});
