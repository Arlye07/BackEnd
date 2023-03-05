const express = require('express')
const port = 8080
const app = express()
 const producto = require("../ProductManager/products.json");
 //const productManager = new ProductManager("../ProductManager/products.json");

//app.use(express.urlencoded({extender: true}))



//--------------------------------------
app.get('/products',(req, res)=>{ 

    res.json({products:objeto})
 }  )

 app.get('/products/:pid',(req, res)=>{ 

    res.json({products:pid})
 }  )

//-------------------------------------------

app.get('/products', async (req, res) => {
    const limit = parseInt(req.query.limit);
    const products = producto.getProducts();
    const limitedProducts = limit ? products.slice(0, limit) : products;
    res.send({ products: limitedProducts });
  });
  
  app.get('/product/:pid', async (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = producto.getProductById(productId);
    if (product) {
      res.send({ product });
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  });

//----------------------------------------------

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})