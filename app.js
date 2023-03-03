const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/names", (req, res) => {
  res.send("Saurabh Sharma web 4");
});
app.get("/", (req, res) => {
  res.send("Now i have changed this page to another page");
});
// change 
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
