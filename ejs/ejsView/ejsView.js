var ejs = require('ejs');
var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    // 读取ejs文件
    fs.readFile("./index.ejs",function(err,data){
        // 绑定模板
        var template = data.toString();
        var dictionary = {a:6};
        var html = ejs.render(template,dictionary);

        res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    
        res.end(html);
    })
}).listen(3000,'127.0.0.1');