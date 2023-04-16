
const mongoose = require('mongoose')
const {
  dbAdmin,
  dbPassword,
  dbHost,
  dbName,
} = require('../src/config/db.config') 

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@ecommerce.wyifhv5.mongodb.net/ecommerce?retryWrites=true&w=majority`
      // `mongodb+srv://${dbAdmin}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
    )
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoConnect