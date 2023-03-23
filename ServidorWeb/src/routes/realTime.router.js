const {Router} = require ('express')
const router = Router()
const productos = [];
router.get('/', (req, res)=>{
    res.render('realTimeProducts.handlebars',{productos, style:'login.css'})
 })


module.exports = router