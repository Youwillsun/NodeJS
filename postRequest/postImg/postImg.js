var http = require('http');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');

// 创建服务器
http.createServer(function (req, res) {
    // 如果访问的是这个地址，且请求类型是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        // create a new incoming form
        var form = new formidable.IncomingForm();
        // 设置文件上传的地址
        form.uploadDir = "./uploads";
        // 执行里面的回调函数的时候，表单已经全部接受完毕了
        // 所有的文本域，单选框，都在fields存放；
        // 所有的文件域 都在files里
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }
            console.log(util.inspect({ fields: fields, files: files }));
            // 当前时间
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            // 生成一个随机数，保证文件名不重复
            var ran = parseInt(Math.random() * 8999 + 10000);
            // 获取文件的扩展名
            var extname = path.extname(files.tupian.name);
            // 获取旧路径
            var oldpath = __dirname + "/" + files.tupian.path;
            // 新的路径有三个部分 时间戳 随机数 扩展名
            var newpath = __dirname + "/uploads/" + ttt + ran + extname;
            // 改名
            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    throw Error("改名失败");
                }
                res.writeHead(200, { 'Content-type': 'text/plain;charset=UTF-8' });
                res.end("成功");
            })
        });
    }
}).listen(3000, '127.0.0.1');