const express = require('express')
const port = 8080
const app = express()
const path = require('path');
 const productManager = require("../ProductManager/products.json");
 //const productManager = new ProductManager("../ProductManager/products.json");

//app.use(express.urlencoded({extender: true}))



//--------------------------------------
/** 
app.get('/products',(req, res)=>{ 
const {limit=2,ordering, price_low=0, price_high=1000, country=arg, orderBy=asc,}=req.query;

    const queries = {
        ordering,
        price_high,
        price_low,
        country,
        orderBy,
        limit
    }

    res.json({message: 'Los productos'})
}  )

 app.get('/products/:pid',(req, res)=>{ 

    res.json({products:pid})
 }  )
*/
//-------------------------------------------

// Endpoint para obtener todos los productos
app.get("/products", async (req, res) => {
  try {
    const limit = req.query.limit || producto.getProducts().length;
    const products = producto.getProducts().slice(0, limit);
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Endpoint para obtener un producto por su ID
app.get("/product/:pid", async (req, res) => {
  try {
    const pid = req.params.pid;
    const product = producto.getProductById(pid);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//----------------------------------------------

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})

