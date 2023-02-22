class ProductManager{
    constructor(){
        this.products =[];
    }
    // class Product {
    //     constructor(title, price, description, thumbnail, code, stock) {
    //       this.title = title;
    //       this.price = price;
    //       this.description = description;
    //       this.thumbnail = thumbnail;
    //       this.code = code;
    //       this.stock = stock;
    //     }
    //   }
    addProduct(product){

        if(this.products.find((x) => x.code === product.code)){
            console.log("Ya implementado");
            return;

        }
        if(
            !product.title || !product.description || !product.price || !product.thumbnail || !product.code ||!product.stock    
        ){
            console.log("Faltan info");
            return;
        }
        product.id = this.products.length +1;
        this.products.push(product);
    }
    // removeProduct(product) {
    //     const index = this.products.indexOf(product);
    //     if (index > -1) {
    //       this.products.splice(index, 1);
    //     }
    //   }
    getProducts(){
        return this.products;

    }
    getProductsById(id){
        const product = this.products.find((x) => x.id === id);
        if(!product){
            console.log("No encontrado");
            return;
        }
        return product;
    }
}
module.exports = ProductManager;