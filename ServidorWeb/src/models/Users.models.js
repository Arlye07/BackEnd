const mongoose = require('mongoose')

const usersCollection = 'user'

const userSchema= new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:{
        type:String,
        unique: true,
    },
})
const Users = mongoose.model(usersCollection,userSchema)

module.exports = Users