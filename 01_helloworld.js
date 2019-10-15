var  http = require("http");

// 创建服务器
var server = http.createServer(function(req,res){
    // 设置请求头
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("哈哈哈");
})

// 运行服务器
server.listen(3000,'127.0.0.1');