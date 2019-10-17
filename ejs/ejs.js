var ejs = require('ejs');

// 模板
var string = "好高兴,今天我买了<%= a %>S";

// 数据
var data = {
    a:6
}

var html = ejs.render(string,data);

console.log(html);