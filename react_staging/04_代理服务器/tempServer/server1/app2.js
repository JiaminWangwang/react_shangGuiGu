var express = require('express');
var app = express();

app.use((request,response,next)=>{
  console.log('有人请求服务器5001了');
  next();
});

app.get('/cars', (request,response)=>{
  const cars = [
    {id: '001', name: '奔驰', price: 200},
    {id: '002', name: '宝马', price: 100},
    {id: '003', name: '奥迪', price: 70}
  ];

  response.send(cars);
})

// module.exports = app
// 更改项目的启动命令：node app.js
const porint = 5001;
app.listen(porint, () => { console.log( porint + '端口启动成功')})

