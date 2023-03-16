const fs = require("fs");
const { Router } = require("express");
const productManager = require("../productManager");
const cartManager = require("../cartManager");
const router = Router();
const path = require("path");


// Ruta para crear un nuevo carrito
router.post("/", (req, res) => {
    const cartId = cartManager.createCart();
    res.json({ cartId });
  });
  
  // Ruta para obtener los productos de un carrito
  router.get("/:cid", (req, res) => {
    const { cid } = req.params;
    const cart = cartManager.getCartById(cid);
    res.json(cart);
  });
  
  // Ruta para agregar un producto a un carrito
  router.post("/:cid/product/:pid", (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
  
    // Obtener el producto por su id
    const product = productManager.getProductById(pid);
  
    // Agregar el producto al carrito
    const cart = cartManager.getCartById(cid);
    cart.addProduct(product, quantity);
  
    res.json(cart);
  });
  

module.exports = router;
