var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // 检测 aaa 是不是文件夹
    fs.stat("./fscreate/aaa",function(err,status){
        console.log(status.isDirectory());
    })

    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');