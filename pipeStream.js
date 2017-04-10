	var fs = require("fs");

var pipeModule = {};

pipeModule.copyFile = function(){
    var reader = fs .createReadStream("hello.txt");

    var writer = fs.createWriteStream("hello1.txt");

    reader.pipe(writer);
}

module.exports = pipeModule;

