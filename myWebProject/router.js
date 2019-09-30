function route(handle,pathName){
    console.log("路径是"+pathName);
    if(typeof handle[pathName] === 'function'){
        handle[pathName]();
    }else{
        console.log("没有路径"+pathName);
    }
};

exports.route = route;