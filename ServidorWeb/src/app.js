const express = require("express");
const port = 8080;
const app = express();
const {Server} = require('socket.io')
const handlebars = require('express-handlebars')
const mongoConnect = require('../db/index')
//const router = require('./router/index')

const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const dbCartRouter= require("./dao/dbManager/carts.controller")
const dbProductsRouter= require("./dao/dbManager/products.controller")

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/dbCarts', dbCartRouter);
app.use('/api/dbProducts', dbProductsRouter);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//------------

//parametros handlebars
app.engine('handlebars', handlebars.engine())
app.set('views',__dirname + '/views')
app.set('view engine','handlebars')

 mongoConnect ()
//router(app)

const httpServer = app.listen(port, async() => { 
   console.log(`Server listening on ${port}`);
});
const io = new Server(httpServer)
const realTimeProductsRouter = require('./routes/realTimeProducts.js');
app.use('/api/realTimeProducts', realTimeProductsRouter(io))

io.on('connection', socket => {
   console.log('Cliente conectado');
   io.emit('mensajeServidor', 'Hola desde el servidor')
})

