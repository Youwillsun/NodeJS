var http = require('http');
var querrstring = require("querystring");
var formidable = require('formidable');

// 创建服务器
http.createServer(function(req,res){
    // 如果访问的是这个地址，且请求类型是post
    if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
        // create a new incoming form
        var form = new formidable.IncomingForm();
        // 设置文件上传的地址
        form.uploadDir = "./uploads";
        // 执行里面的回调函数的时候，表单已经全部接受完毕了
        form.parse(req,function(err,fields,files){
            console.log(fields);
            console.log(files);
            // console.log(util.inspect({fields:fields,files:files}));
            res.writeHead(200,{'Content-type':'text/plain'});
            // res.end(util.inspect({fields: fields,files: files}));
            res.end("成功");
        });
    }
}).listen(3000,'127.0.0.1');