const ProductManager = require("./class");
const producto = new ProductManager();



 producto.addProduct({
 title:"producto 1",
 description:"pelota",
 price:1100,
 thumbnail:"sin foto",
 code:"assdfg098",
 stock:10,

 } );
  producto.addProduct({
      title:"producto 2",
      description:"medias",
      price:800,
      thumbnail:"sin foto",
      code:"assdfg0981",
      stock:10,
      
     } );

 producto.addProduct({
     title:"producto 3",
     description:"short",
     price:1400,
     thumbnail:"sin foto",
     code:"assdfg09",
     stock:10,
     
     } );
 producto.addProduct({
     title:"producto 4",
     description:"conos",
     price:800,
     thumbnail:"sin foto",
     code:"assdfg0",
     stock:10,
     
     } );

     producto.addProduct({
        title:"producto 5",
      description:"mancuernas",
      price:2000,
      thumbnail:"sin foto",
      code:"assdfg",
      stock:10,
      

     })


     console.log(producto.getProducts());
      
     //producto.getProductsById(1)
     //console.log(producto.getProductsById(4));




     //console.log(Object.values(producto));
     //console.log(Object.entries(producto));

