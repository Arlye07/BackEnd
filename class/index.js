class ProductManager{
    constructor(){
        this.products =[];
    }
    addProduct(product){
        if(this.products.find((x) => x.code === product.code)){
            console.log("Ya implementado");
            return;

        }
        if(
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock 
            
        ){
            console.log("Faltan Datos");
            return;
        }
        product.id = this.products.length +1;
        this.products.push(product);
    };
    getProducts(){
        return this.products ;

    }
    getProductsById(id){
        const product = this.products.find((x) => product.id === id);
        if(!product){
            console.log("No encontrado");
            return;
        }
        return product;
    }
}
module.exports = ProductManager;