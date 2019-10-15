var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    var query = url.parse(req.url,true).query;

    var name = query.name;

    var age = query.age;

    var sex = query.sex;
    res.end('服务器收到请求'+name+age+sex);
}).listen(3000,'127.0.0.1')