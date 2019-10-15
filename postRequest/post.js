var http = require("http");
var querystring = require("querystring");

http.createServer(function (req, res) {
    // 如果访问地址是 /dopost ,且请求方式是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var alldata = "";
        // 添加请求监听，data代表的是请求过程中
        //chunk是数据块,node为了追求极致，把post请求的数据，分成一小段一小段的接收
        req.addListener("data", function (chunk) {
            console.log(chunk);
            // 拼接数据块
            alldata += chunk;
        });
        // 添加监听，end代表的是请求结束
        req.addListener("end", function () {
            res.writeHead(200, {
                "Content-type": "text/html;charset=UTF-8"
            });
            var datastring = alldata.toString();
            // 将获取到的数据datastring转换成一个对象
            var dataobj = querystring.parse(datastring);
            console.log(dataobj);
        });
        res.end("success");
    }
}).listen(80, '127.0.0.1');