const express = require("express");
let http = require("http");
const cors = require('cors');
var bodyParser = require('body-parser')
 
var app = express()
 
app.use(cors());
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
http = http.Server(app);

const { getFib } = require("./fib.js");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1>");
});


app.post("/", jsonParser, (req, res) => {
  let num = req.body.num;
  try{
    num = parseInt(num);
    res.status(200).send(`${getFib(num)}`);
  } catch(e){
    res.status(200).send(`${num} is cannot be converted into a number!`);
  }
})

http.listen(port, () => {
  console.log(`Server: Listening on localhost:${port}`);
});
