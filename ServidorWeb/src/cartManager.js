// const fs = require('fs');

// const express = require('express');
// const cartRouter = require('./routes/cart.router');

// const app = express();

// app.use('/cart', cartRouter);

// class CartManager {
//   constructor(path) {
//     this.path = path;
//     this.cartData = [];
//     this.loadCarts();
//   }

//   loadCarts() {
//     const cartJson = fs.readFileSync(this.path);
//     this.cartData = JSON.parse(cartJson);
//   }

//   saveCarts() {
//     fs.writeFileSync(this.path, JSON.stringify(this.cartData, null, 2));
//   }

//   createCart() {
//     const id = this.cartData.length + 1;
//     const cart = {
//       id,
//       products: []
//     };
//     this.cartData.push(cart);
//     this.saveCarts();
//     console.log(`Cart created with ID: ${id}`);
//     return id;
//   }

//   getCart(cartId) {
//     const cart = this.cartData.find(c => c.id === cartId);
//     if (!cart) {
//       console.log(`Cart ${cartId} not found`);
//       return null;
//     }
//     return cart;
//   }

//   addProductToCart(cartId, productId) {
//     const productJson = fs.readFileSync('./data/products.json');
//     const products = JSON.parse(productJson);
//     const product = products.find(p => p.id === productId);
//     if (!product) {
//       console.log(`Product ${productId} not found`);
//       return;
//     }
//     const cart = this.getCart(cartId);
//     if (!cart) {
//       console.log(`Cart ${cartId} not found`);
//       return;
//     }
//     const cartProduct = cart.products.find(p => p.id === productId);
//     if (cartProduct) {
//       cartProduct.quantity++;
//     } else {
//       cart.products.push({
//         id: productId,
//         quantity: 1
//       });
//     }
//     this.saveCarts();
//     console.log(`Product ${productId} added to cart ${cartId}`);
//   }
// }

// module.exports = CartManager;
const fs = require("fs");

class CartManager {
  constructor(path, productMa){
    this.path = path;
    this.productManager = productMa;
  }

  addProductToCart(cartId, productId, quantity) {
    const carts = this.getCartsArchivo();
    const cartIndex = carts.findIndex(c => c.id === cartId);

    if (cartIndex !== -1) {
      const cart = carts[cartIndex];
      const product = this.productManager.getProductById(productId);

      if (product) {
        const existingProductIndex = cart.products.findIndex(p => p.id === productId);
        if (existingProductIndex !== -1) {
          cart.products[existingProductIndex].quantity += quantity;
        } else {
          cart.products.push({ id: productId, quantity });
        }
        this.saveCartsArchivo(carts);
      }
    }
  }

  getCarts() {
    return this.getCartsArchivo();
  }

  getCartsById(id) {
    const carts = this.getCartsArchivo();
    const cart = carts.find((c) => c.id == id);

    return cart || null;
  }

  getCartsArchivo() {
    try {
      if (!fs.existsSync(this.path)) {
        fs.writeFileSync(this.path, "[]");
      }
      const cartsData = fs.readFileSync(this.path, "utf-8");
      const carts = JSON.parse(cartsData);
      return carts;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  saveCartsArchivo(carts) {
    fs.writeFileSync(this.path, JSON.stringify(carts));
  }
}

module.exports = CartManager;
