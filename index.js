const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

app.get("/google", (req, res) => {
  res.send("Hello, world!");
});
app.get('/login',(req, res)=>{
  res.send(`<h1>m sikh gya bhai</h1>`)
})
app.get('/youtube',(req, res)=>{
  res.send(`<h2>Chai Aur</h2>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
