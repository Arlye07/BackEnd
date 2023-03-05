const producto = require("./ProductManager/funtions.js");
//const producto = new ProductManager('./ProductManager/products.json');
//const productManager = require('./ProductManager');


   producto.addProduct({
   title:"producto 1",
   description:"pelota",
   price:1100,
   thumbnail:"sin foto",
   code:"assdfg098",
   stock:10,

   } );
//    producto.addProduct({
//        title:"producto 2",
//        description:"medias",
//        price:800,
//        thumbnail:"sin foto",
//        code:"assdfg0981",
//        stock:10,
      
//       } );

//   producto.addProduct({
//       title:"producto 3",
//       description:"short",
//       price:1400,
//      thumbnail:"sin foto",
//      code:"assdfg09",
//       stock:10,
     
//       } );
//   producto.addProduct({
//       title:"producto 4",
//       description:"conos",
//       price:800,
//       thumbnail:"sin foto",
//       code:"assdfg0",
//       stock:10,
     
//       } );

      // producto.addProduct({
       //   title:"producto 5",
       // description:"mancuernas",
      //  price:2000,
      //  thumbnail:"sin foto",
       // code:"assdfg",
       // stock:10,
      
      // })

  /** /* 
     console.log(producto.getProducts());//(entendido)
    console.log(producto.saveProducts(2));//(no del todo)
     console.log( producto.updateProduct(1)); //(no del todo)
     console.log(producto.deleteProduct(4));// (entendido)
     console.log(producto.getProductById(6)); //entendido
   */


    //console.log( producto.loadProducts(1));



    //deleteProduct(id(2))


   // console.log(Object.values(producto));
     //console.log(Object.entries(producto));



    //  const http = require('http')

    //  const server = http.createServer((req,res)=> {
    //      res.end('Hola a todos!!')
    //  })
     
    //  server.listen(3000,()=>{
    //      console.log('Server running at port 3000');
    //  })