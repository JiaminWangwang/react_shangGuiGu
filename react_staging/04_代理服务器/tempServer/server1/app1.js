var express = require('express');
var app = express();

app.use((request,response,next)=>{
  console.log('有人请求服务器5000了');
  next();
});

app.get('/students', (request,response)=>{
  const data = [
    {id: '001', name: '小张', age: 18},
    {id: '002', name: '小李', age: 19},
    {id: '003', name: '小王', age: 17}
  ];

  response.send(data);
})

// module.exports = app
// 更改项目的启动命令：node app.js
const porint = 5000;
app.listen(porint, () => { console.log( porint + '端口启动成功')})

