var streamModule = {};

var fs = require("fs");

var testFile = "hello.txt";

streamModule.createFile = function(){
    var writer = fs.createWriteStream(testFile);

    var message = "hello world";

    writer.write(message);
};

streamModule.readFile = function(){
    var reader = fs.createReadStream(testFile);
    reader.setEncoding("UTF8");

    reader.on("data",function(chunk){
        console.log(chunk);
    });

    reader.on("error",function(err){
        console.log(err.stack);
    });
};

module.exports = streamModule;