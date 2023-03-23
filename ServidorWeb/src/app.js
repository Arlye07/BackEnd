const express = require("express");
const router = express.Router();
const port = 8080;
const app = express();
const morgan = require("morgan");
const {Server} = require('socket.io')
const handlebars = require('express-handlebars')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const viewsRouter = require('./routes/views.router')
const realTimeProductsRouter = require('./routes/realTime.router')
 

const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
//const viewsRouter = require('./routes/views.router')

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
//app.use('api/products/realTime, ', viewsRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));
//------------

//parametros handlebars
app.engine('handlebars', handlebars.engine())
app.set('views',__dirname + '/views')
app.set('view engine','handlebars')


// captura las routes de cada logica (endpoint)
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/views', viewsRouter)
app.use('/realTimeProducts', realTimeProductsRouter)

//router(app)


app.get('/realTimeProducts', (req, res)=>{
   res.render('realTimeProducts.handlebars', {title: 'BackEnd-Ariel'})
})


//---------

const httpServer = app.listen(port, () => {
   console.log(`Server listening on ${port}`);
});

const io = new Server(httpServer)

io.on('connection', socket => {
   console.log('Cliente conectado');

   io.emit('mensajeServidor', 'Hola desde el servidor')
   socket.on('mensajeCliente', message => {
      console.log(message);
   })
})
io.on('connection', (socket) => {
   socket.on('productos', () => {
     socket.emit('productos', productManager.getProducts())
   })
 })
