var http = require("http");
var i = 1;
var fs = require("fs");
var reader = fs.createReadStream("htmlFile.html");
reader.setEncoding("UTF8");
var toSend = reader.read();
var server = http.createServer(function(req,res){
    console.log(req.url,"out");
    if(req.url==="/"){
        reader.pipe(toSend);
        console.log("/");
    }
})

server.listen(40000,function(){
    console.log("listening on port 40000");
});