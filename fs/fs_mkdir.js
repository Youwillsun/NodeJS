var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // 创建文件夹
    fs.mkdir('./fscreate/aaa', {
        recursive: true
    }, (err) => {
        if (err) throw err;
    });

    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');