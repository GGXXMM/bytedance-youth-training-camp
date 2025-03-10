const fs = require('fs');
const http = require("http");

http.createServer((request, response)=> {
  const {method, url} = request;
  if(url == '/' && method == 'GET') {
    fs.readFile('index.html', (err, data)=> {
      if(err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('500 服务挂了哦')
      }
      response.statusCode = 200;
      response.end(data)
    })
  }
  else if(url === '/users' && method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end('用户数据')
  }
  else{
    response.statusCode = 404;
    response.end('404 资源找不到')
  }
}).listen(3001, ()=> {
  console.log('server listening')
})
