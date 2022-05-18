const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res, next){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res, next){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The result of the calculation is " + result)
})


app.get("/*", function(req, res, next){
    res.send("error has occured")
})

app.listen(3000, function(){
    console.log("Server has started on port 3000")
});