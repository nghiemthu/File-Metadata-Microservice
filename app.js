//Declare
var bodyParser = require('body-parser');
var express = require('express');
var multer  = require('multer');

//Set up
var app = express();
var upload = multer({ dest: 'uploads/' });

app.set("view engine", "ejs");

///////////////////////
//ROUTES
//Get all get request
app.get("/*", function(req, res){
    res.render("index");
});

//Post request
app.post('/upload', upload.single('file') , function (req, res, next) {
   console.log(req.file);
   res.json(req.file);
});

// Start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server stated!");
});