var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // 如果是小图标请求，直接啥也不做
    if (request.url == '/favicon.ico') {
        return;
    }
    response.writeHead(200, {
        'Content-Type': 'text/plaintext/html;charset=UTF-8'
    });

    var userid = parseInt(Math.random() * 89999) + 10000;
    console.log("欢迎" + userid);
    // 两个参数，第一个是完整路径，第二个是回调函数
    fs.readFile("./1.txt", function (err, data) {
        if (err) {
            throw err;
        }
        console.log(userid + "文件读取完毕");
        response.end(data);
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');