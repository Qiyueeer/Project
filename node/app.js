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
  let html = "<h1 style='text-align:center'>Cart</h1>";
  
  cartItems.forEach(item => {
    html += `<p style='text-align:center'>${item.item} - Price: ${item.price} - Number : ${item.count} </p>`;
  });
  
  res.send(html);
});

// HTML表单，用于添加商品到购物车
app.get('/', (req, res) => {
  const form = `
    <h1 style='text-align:center'>add Product</h1>
    <form action="/add-to-cart" method="post" style='width:200px;margin:0 auto'>
      <label for="item">Product Name:</label>
      <select name="item" id="item" >
        <option value="laptop">laptop</option>
        <option value="refrigerator">refrigerator</option>
        <option value="speaker">speaker</option>
      </select>
      <br>
      <label for="price">The Price of Product:</label>
      <input type="text" id="price" name="price">
      <br>
      <label for="price">The Product Number:</label>
      <select name="count" id="count" >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
      <input type="submit" value="Add to Cart" style='margin-top:20px'>
    </form>
  `;
  console.log(form);
  res.send(form);
});

app.listen(3000, () => {
  console.log('服务器已运行在 http://localhost:3000');
});
