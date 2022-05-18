const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res, next){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res, next){
    res.send("thanks for posting that")
})


app.get("/*", function(req, res, next){
    res.send("error has occured")
})

app.listen(3000, function(){
    console.log("Server has started on port 3000")
});