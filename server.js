const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extebded: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n2/((n1*n1)/10000);
  res.send("Your BMI is " + result.toFixed(2));
  res.send(n1+n2);
});

app.listen(3000, function(){
  console.log ("Sever has started on port 3000");
});
