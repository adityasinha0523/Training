var gzip = require("zlib").createGzip();

var fs = require("fs");

// var reader = fs.createReadStream("hello.txt");
// var writer = fs.createWriteStream("hello.txt.gz");

// reader.pipe(gzip).pipe(writer);
var gunzip = require("zlib").createGunzip();
var reader = fs.createReadStream("hello.txt.gz");
reader.setEncoding("application/gzip");
var writer = fs.createWriteStream("hello.txt");
reader.pipe(gunzip).pipe(writer);

// reader = fs.createReadStream("hello.txt.gz");
// writer = fs.createWriteStream("hello_unzipped.txt");

// reader.pipe(gunzip).pipe(writer);
