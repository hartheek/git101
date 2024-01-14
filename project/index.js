const express= require('express');
var products= require('./routes/products');
var orders=require('./routes/orders');
var users=require('./routes/users');

const app= express();

app.use('/products',products);
app.use('/users',users);
app.use('/orders',orders);
app.listen(4000);
