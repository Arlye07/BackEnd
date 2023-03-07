const fs = require("fs");
const path = "../data/products.json";


class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
    this.loadProducts();
  }

  addProduct(product) {
    if (this.products.find((x) => x.code === product.code)) {
      console.log("Ya implementado");
      return;
    }
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Faltan info");
      return;
    }
    product.id = this.products.length + 1;
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((x) => x.id === id);
    if (!product) {
      console.log("No encontrado");
      return;
    }
    return product;
  }


  updateProduct(id, updates) {
    try {
      const data = fs.readFileSync(this.path, "utf-8");
      this.products = JSON.parse(data);
      const productIndex = this.products.findIndex((x) => x.id === id);
      if (productIndex === -1) {
        console.log("No se encontró");
        return;
      }
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...updates,
        id: this.products[productIndex].id
      };
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t"));
      return this.products[productIndex];
    } catch (error) {
      console.log("Error:", error.message);
      return;
    }
  }


  deleteProduct(id) {
    const productIndex = this.products.findIndex((x) => x.id === id);
    if (productIndex === -1) {
      console.log("No encontrado");
      return;
    }
    this.products.splice(productIndex, 1);
    this.saveProducts();
    return "Se elimino el producto";
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      console.log("Error al cargar productos:", error.message);
    }
  }

  saveProducts() {
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.products, null,"\t" ));
    } catch (error) {
      console.log("Error al guardar productos:", error.message);
    }
  }
}

const productManager = new ProductManager('../data/products.json');
module.exports = productManager;
