var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // 如果是小图标请求，直接啥也不做
    if (request.url == '/favicon.ico') {
        return;
    }
    fs.readdir('./fscreate', function (err, files) {
        // files 是一个数组，表示./fscreate文件夹中的所有东西，包括文件以及文件夹，存储的是名字
        // console.log(files);

        // 读取目录下的所有文件夹
        // var wenjianjia = [];
        // fs.readdir('./fscreate', function (err, files) {
        //     for (var i = 0; i < files.length; i++) {
        //         var thefilename = files[i];
        //         // 因为读取出来的包括文件和文件夹，所有进行检测
        //         fs.stat('./fscreate/' + thefilename, function (err, status) {
        //             // 如果是一个文件夹
        //             if (status.isDirectory()) {
        //                 wenjianjia.push(thefilename);
        //             }
        //         });
        //     };
        //     // 因为是循环里套了个异步的语句，所以执行的时候会有问题，输出的都是空数组
        //     console.log(wenjianjia);
        // });

        // ------------------------------------------------------------------------------

        // 读取目录下的所有文件【解决上面的问题】
        var wenjianjia = [];
        // 设置一个自我迭代函数，从第0项开始迭代，i的初始值为0，i对应的其实就是files[i]的下标i
        // 这个迭代函数就是强行把异步的函数变成了同步，1,2,3依次按顺序做
        (function iterator(i) {
            // 由于这个迭代函数会无限执行，所以要限制迭代次数
            if (i == files.length) {
                // 如果迭代的次数和数组长度相同，则输出数组，结束迭代
                console.log(wenjianjia);
                return;
            }
            // 检测文件
            fs.stat("./fscreate/" + files[i], function (err, status) {
                // 检测成功，如果是文件夹
                if (status.isDirectory()) {
                    wenjianjia.push(files[i]);
                }
                // 然后迭代第 i+1 项
                iterator(i + 1);
            });
        })(0);
    });

    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');