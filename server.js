const express = require("express");
const path = require("path");
const app = express();
app.use (express.static(__dirname + '/dist/first-building-app'));
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname+ '/dist/first-building-app/index.html'))
})
app.listen(process.env.PORT || 4000);
