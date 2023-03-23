const socket = io()

socket.on('mensajeServidor', message =>{
    console.log(message);
})

const newProductForm = document.getElementById('newProduct')

newProductForm.addEventListener('submit', e => {
    e.preventDefault ()})

    const data = new FormData(newProductForm)
    const obj = {}

    data.forEach((value, key) => (obj[key] = value ))
    //console.log(cliente);

socket.emit('newProduct', obj)

// Swal.fire({
//     title:'Identificate',
//     input:'text',
//     text: 'Ingresa un usuario para',
//     inputValidator: value =>{
//         return !value &&
//     }

// })



// setInterval(()=>{
     socket.emit('mensajeCliente', 'Hola desde el cliente')
// },2000)