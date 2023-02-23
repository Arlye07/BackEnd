const fs = require ('fs')

const file = './archivoSincronico.txt'

fs.writeFileSync(file, 'Hola gente')
const data = fs.readFileSync(file, 'utf-8')
console.log(data);

fs.appendFileSync (file, 'Bien venidos a todos')
const newData = fs.readFileSync(file, 'utf-8')
console.log(newData);

fs.unlinkSync(file)
console.log(fs.existsSync);