const fs = require('fs')

const file ='./archivosCallback.js'

fs.writeFile(file,'Archivos con callBack',(error)=> {
    if (error) return error

    fs.readFile(file, 'utf-8',(error,responde)=>{
        if (error) return error
        console.log(responde);

        fs.appendFile(file,'esta es una actualizacion', error =>{
            if (error) return error
            
            fs.readFile(file,'utf-8',(error, response)=>{
                if(error) return error
                console.log(responde);
            })
        })
    })
})