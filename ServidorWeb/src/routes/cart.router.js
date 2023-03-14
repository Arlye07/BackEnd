const {Router} = require('express');

const cart= [];

const router =Router();


router.get('/',(req,res)=>{
    res.json({message:'HiPets'});
});

module.exports = router;