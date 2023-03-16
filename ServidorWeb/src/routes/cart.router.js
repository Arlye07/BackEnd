// const fs = require('fs');
// const { Router } = require('express');
// const CartManager = require('../cartManager');
// const path = require('path');

// const router = Router();
// const cartManager = new CartManager(path.resolve(__dirname, '../data/carts.json'));

//-----------

// // Ruta para crear un nuevo carrito
// router.post('/', (req, res) => {
//   const cartId = cartManager.createCart();
//   res.json({ cartId });
// });

// // Ruta para obtener los productos de un carrito
// router.get('/:cid', (req, res) => {
//   const { cid } = req.params;
//   const cart = cartManager.getCart(cid);
//   if (cart === null) {
//     res.status(404).json({ error: 'Carrito no encontrado' });
//   } else {
//     res.json(cart);
//   }
// });

// // Ruta para agregar un producto a un carrito
// router.post('/:cid/products/:pid', (req, res) => {
//   const { cid, pid } = req.params;
//   cartManager.addProductToCart(cid, pid);
//   res.json({ message: 'Producto agregado con éxito' });
// });

// module.exports = router;

///---------
const { Router } = require('express');
const cartMa = require('../cartManager');
const productMa = require('../productManager');
const router = Router();

router.post('/', async (req, res) => {
  try {
    const carts = await cartMa.getCarts();
    const cart = {
      id: carts.length + 1,
      products: []
    };
    carts.push(cart);
    await cartMa.saveCartsArchivo(carts);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await cartMa.getCartsById(cid);
    if (!cart) {
      res.status(404).json({ error: 'Carrito No encontrado' });
    } else {
      res.json(cart.products);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:cid/product/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const quantity = parseInt(req.body.quantity) || 1;
    const product = await productMa.getProductById(pid);
    if (!product) {
      res.status(404).json({ error: 'Not found' });
    } else {
      const cart = await cartMa.getCartsById(cid);
      if (!cart) {
        res.status(404).json({ error: 'Carrito not found' });
      } else {
        console.log(cart, product.id, quantity);
        await cartMa.addProductToCart(cart.id, product.id, quantity);
        res.status(201).json({ message: 'Producto Agregado' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



// router.post('/', async (req, res) => {
//   try {
//     const carts = await cartManager.getCarts();
//     const cart = {
//       id: carts.length + 1,
//       products: []
//     };
//     carts.push(cart);
//     await cartManager.saveCartsArchivo(carts, path.resolve(__dirname, '../data/carts.json'), fs);
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/:cid', async (req, res) => {
//   try {
//     const { cid } = req.params;
//     const cart = await cartManager.getCartsById(cid, path.resolve(__dirname, '../data/carts.json'), fs);
//     if (!cart) {
//       res.status(404).json({ error: 'Carrito No encontrado' });
//     } else {
//       res.json(cart.products);
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post('/:cid/product/:pid', async (req, res) => {
//   try {
//     const { cid, pid } = req.params;
//     const quantity = parseInt(req.body.quantity) || 1;
//     const product = await productManager.getProductById(pid, path.resolve(__dirname, '../data/products.json'), fs);
//     if (!product) {
//       res.status(404).json({ error: 'Producto no encontrado' });
//     } else {
//       const cart = await cartManager.getCartsById(cid, path.resolve(__dirname, '../data/carts.json'), fs);
//       if (!cart) {
//         res.status(404).json({ error: 'Carrito no encontrado' });
//       } else {
//         console.log(cart, product.id, quantity);
//         await cartManager.addProductToCart(cart.id, product.id, quantity, path.resolve(__dirname, '../data/carts.json'), fs);
//         res.status(201).json({ message: 'Producto Agregado con exito' });
//       }
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

///-------
// Ruta para crear un nuevo carrito
// router.post("/", (req, res) => {
//     const cartId = cartManager.createCart();
//     res.json({ cartId });
//   });
  
//   // Ruta para obtener los productos de un carrito
//   router.get("/:cid", (req, res) => {
//     const { cid } = req.params;
//     const cart = cartManager.getCartById(cid);
//     res.json(cart);
//   });
  
//   // Ruta para agregar un producto a un carrito
//   router.post("/:cid/product/:pid", (req, res) => {
//     const { cid, pid } = req.params;
//     const { quantity } = req.body;
  
//     // Obtener el producto por su id
//     const product = productManager.getProductById(pid);
  
//     // Agregar el producto al carrito
//     const cart = cartManager.getCartById(cid);
//     cart.addProduct(product, quantity);
  
//     res.json(cart);
//   });
  

// module.exports = router;
