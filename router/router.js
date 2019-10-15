var http = require('http');

http.createServer(function (req, res) {
    // 得到url
    var userurl = req.url;
    // 请求头
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    });
    // substr函数来判断此时的开头
    if (userurl.substr(0, 9) == "/student/") {
        // 截取字符串，判断学号是不是10位
        var studentid = userurl.substr(9);
        if (/^\d{10}$/.test(studentid)) {
            res.end("您要查询的学生信息，id为" + studentid);
        } else {
            res.end('学生学号位数不对');
        }
    } else if (userurl.substr(0, 9) == "/teacher/") {
        var teacherid = userurl.substr(9);
        if (/^\d{6}$/.test(teacherid)) {
            res.end("您要查询的教师信息，id为" + teacherid);
        } else {
            res.end('教师工号位数不对');
        }
    } else {
        res.end("请检查url");
    }
}).listen(3000, '127.0.0.1');