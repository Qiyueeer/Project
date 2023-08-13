
const http = require('http');
var server = http.createServer(); 

server.on('request', function (request, response) {

    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write('<h1>hello world！</h1>');
    response.end();
})

server.listen(8080, function(){
    console.log("服务器已经启动，可访问以下地址：");
    console.log('http://localhost:8080');
})

