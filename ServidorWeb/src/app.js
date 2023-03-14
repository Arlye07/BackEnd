const fs = require("fs");
const express = require("express");
const port = 8080;
const app = express();
const path = require("path");
const productManager = require("./productManager");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--------------------------------------
// GET /products
app.get("/products", async (req, res) => {
    try {
      const products = productManager.getProducts();
      res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
// GET /products/:id
app.get("/products/:pid", async (req, res) => {
  try {
    const productId = +req.params.pid;

    const product = productManager.getProductById(productId);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// POST /products
app.post("/products", (req, res) => {
  const body = req.body;
    try {
      productManager.addProduct(body);
      return res.status(201).json({ message: "Producto creado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
});

// DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  try {
    productManager.deleteProduct(id);
    res.json({ message: `Se elimino el product ${id}`});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
})

// PUT /products/:id
app.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const body = req.body;
  try {
    productManager.updateProduct(id, body);
    res.json({ message: `Product id ${id} modified`});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

//-------------------------------------------

app.listen(port, () => {
   console.log(`Server listening on ${port}`);
});
