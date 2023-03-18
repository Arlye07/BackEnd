const fs = require("fs");
const express = require("express");
const router = express.Router();
const port = 8080;
const app = express();
const path = require("path");
const morgan = require("morgan");

const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);


app.listen(port, () => {
   console.log(`Server listening on ${port}`);
});
