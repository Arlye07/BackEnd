const fs = require("fs");
const path = `${__dirname}/../data/carts.json`;

class CartManager {
  constructor(path) {
      this.path = path;
      //this.carts = [];
    //this.loadCarts();
  }

  creandoCart(){
    const carrito = fs.readFileSync(this.path)
    const carro = JSON.parse(carrito)

    const id = carro.length + 1

    const addCart = {
        "id":id,
        "products": []
    }

    carro.push(newCart)
    fs.writeFileSync(this.path, JSON.stringify(carro,null,2))
    console.log($(id));

  }

//   addCart() {
//     const newCart = {
//       id: this.readFileSync(),
//       products: []
//     };
//     this.carts.push(newCart);
//     this.saveCarts();
//     return newCart;
//   }

//   getCartById(id) {
//     const cart = this.carts.find((x) => x.id === id);
//     if (!cart) {
//       throw "No encontrado";
//     }
//     return cart;
//   }

//   addProductToCart(cartId, productId, quantity = 1) {
//     const cart = this.getCartById(cartId);
//     const product = { id: productId, quantity };
//     const index = cart.products.findIndex((p) => p.id === productId);
//     if (index === -1) {
//       cart.products.push(product);
//     } else {
//       cart.products[index].quantity += quantity;
//     }
//     this.saveCarts();
//     return cart;
//   }

//   loadCarts() {
//     try {
//       const data = fs.readFileSync(this.path, "utf-8");
//       this.carts = JSON.parse(data);
//     } catch (error) {
//       console.log("Error al cargar carritos:", error.message);
//     }
//   }

//   saveCarts() {
//     try {
//       fs.writeFileSync(this.path, JSON.stringify(this.carts, null, "\t"));
//     } catch (error) {
//       console.log("Error al guardar carritos:", error.message);
//     }
//   }

//   getNextId() {
//     const ids = this.carts.map((c) => c.id);
//     const maxId = ids.length > 0 ? Math.max(...ids) : 0;
//     return maxId + 1;
//   }
 }

const cartManager = new CartManager(path);
module.exports = cartManager;
