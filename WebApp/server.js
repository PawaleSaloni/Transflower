const express = require("express");

var app = express();
app.get("/api/hello", function(req,res){
    var product = {
        id: 1,
        name: "Gerbera",
        price: 100
    };
    res.send(product);
});

app.listen(9000, function(){
    console.log("Server is running on port 9000");
});














console.log(" Hello World ");
