const fs = require('fs');
const express = require('express')
const port = 8080
const app = express()
const path = require('path');
 const productManager = require("./funtions");
 //const productManager = new ProductManager("../ProductManager/products.json");

app.use(express.urlencoded({extended: true}))



//--------------------------------------
 
app.get('/products', async (req, res) => {
  const {ordering, price_low = 0, price_high = 100, country, orderBy } = parseInt( req.query );

  let limit = parseInt(req.query.limit) || 3;
  if (isNaN(limit) || limit <= 0) {
    return res.status(400).json({ error: 'El parámetro "limit" debe ser un número positivo' });
  }
  
  try {
      const data = await fs.promises.readFile('../data/products.json', 'utf8');
      const products = JSON.parse(data);

      const queries = {
          ordering,
          price_high,
          price_low,
          country,
          orderBy,
          limit
      }

      res.json({ message: 'Los productos', products: products.slice(0, limit), queries });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error' });
  }
});


app.get('/products/:pid', async (req, res) => { console.log(req.params.pid);
    const productId = parseInt(req.params.pid);

    try {
        
        const data = await fs.promises.readFile('../data/products.json', 'utf8');
        const products = JSON.parse(data);
        const product = products.find(p => p.id === productId);

        if (!product) {
            return res.status(404).json({ error: `ID del producto ${productId} no encontrado` });
        }

        res.json({ product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
});

//-------------------------------------------

// Endpoint para obtener todos los productos
// app.get("/products", async (req, res) => {
//   try {
//     const limit = req.query.limit || producto.getProducts().length;
//     const products = productManager.getProducts().slice(0, limit);
//     res.send(products);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// // Endpoint para obtener un producto por su ID
// app.get("/product/:pid", async (req, res) => {
//   try {
//     const pid = req.params.pid;
//     const product = productManager.getProductById(pid);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ error: "Producto no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

//----------------------------------------------

app.listen(port, ()=>{
    console.log(`Servidor en marcha en ${port}`);
})

