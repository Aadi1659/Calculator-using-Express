var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//use this line whenever required to get information from an HTML form
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    //the __dirname will fetch out the directory from anyones computer on the web.
    //its useful when we have our webpage live and is used by many users.
    //all of them must have different paths so the __dirname will help us on that issue.
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    //logs all the form elements before getting posted..
    // console.log(req.body);
    var num2 = Number(req.body.num2);
    var num1 = Number(req.body.num1);
    var result = num1 + num2;
    res.send("Thanks for posting! The answer of the calculation is "+result);
})

app.listen(3000,function(){
    console.log("Server started on port 3000..");
})