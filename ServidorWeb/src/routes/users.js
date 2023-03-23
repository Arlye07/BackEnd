const {Router} = require ('express')
const router = Router()


    const userInfo = [{
       name:'Eber',
       course:'backend'
    },
    {
       name:'Ernesto',
       course:'nodeJS'
    },
    {
        name:'ERACLITO',
        course:'FRONT'
    },]
    const user = {
        name:'Eb',
        course:'ingles',
        role:'admin'
    }
    router.get('/', (req,res) => {
        
        /*const numberMax = users.length
        const random = Math.floor(Math.random()*numberMax)
        console.log(random);*/
        res.render('index.handlebars',{
            userInfo,//: users [random],
            user,
            title:'Curso de NodeJS y Express',
            user,
            role: user.role === 'admin'})
        })
        
 module.exports = router