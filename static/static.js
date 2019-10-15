var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
    // 得到用户的路径
    var pathname = url.parse(req.url).pathname;
    // 默认是首页
    if(pathname == "/"){
        pathname = "index.html";
    }
    // 拿到输入的文件的扩展名
    var extname = path.extname(pathname);
    console.log(extname);
    // 直接去找这个文件，并读取
    fs.readFile("./page/"+pathname, function (err, data) {
        if (err) {
            // 读取404页面
            fs.readFile("./page/404.html",function(err,data){
                res.writeHead(404,{'Content-Type': 'text/html;charset=UTF-8'});
                res.end(data);
            });
            return;
        }
        var mime = getMime(extname);
        res.writeHead(200,{'Content-Type': mime});
        res.end(data);
    });
}).listen(3000,"127.0.0.1");

function getMime(extname){
    switch(extname){
        case '.html':
            return "text/html";
            break;
        case '.jpg':
            return 'image/jpg';
            break;
        case '.css':
            return 'text/css';
            break;
    }
}