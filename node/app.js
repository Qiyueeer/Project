const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let cartItems = [];

// 添加商品到购物车
app.post('/add-to-cart', (req, res) => {
  const item = req.body.item;
  const price = req.body.price;
  const count = req.body.count;
  
  cartItems.push({ item, price ,count});
  res.redirect('/cart');
});

// 查看购物车
app.get('/cart', (req, res) => {
  let html = "<h1 style='text-align:center'>购物车</h1>";
  
  cartItems.forEach(item => {
    html += `<p style='text-align:center'>${item.item} - 价格: ${item.price} - 数量 : ${item.count} </p>`;
  });
  
  res.send(html);
});

// HTML表单，用于添加商品到购物车
app.get('/', (req, res) => {
  const form = `
    <h1 style='text-align:center'>添加商品</h1>
    <form action="/add-to-cart" method="post" style='width:200px;margin:0 auto'>
      <label for="item">商品名称:</label>
      <select name="item" id="item" >
        <option value="笔记本">笔记本</option>
        <option value="空调">空调</option>
        <option value="电风扇">电风扇</option>
      </select>
      <br>
      <label for="price">商品价格:</label>
      <input type="text" id="price" name="price">
      <br>
      <label for="price">商品数量:</label>
      <select name="count" id="count" >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
      <input type="submit" value="添加到购物车" style='margin-top:20px'>
    </form>
  `;
  console.log(form);
  res.send(form);
});

app.listen(3000, () => {
  console.log('服务器已运行在 http://localhost:3000');
});
