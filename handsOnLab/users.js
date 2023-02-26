const UserManager = require("./ManagerUsuarios");

const userManager = new UserManager("./users.json");

const usuario = async () =>{
    const usuario1 = {
        nombre: 'Ari',
        apellido: 'Villa',
        curso: 1
    }
    const usuario2 = {
        nombre: 'Igna',
        apellido: 'Vi',
        curso: 1
    }
    const usuario3 = {
        nombre: 'Noe',
        apellido: 'Via',
        curso: 1
    }

    await userManager.crearUsuario(usuario1)
    await userManager.crearUsuario(usuario2)
    await userManager.crearUsuario(usuario3)

    const response = await userManager.crearUsuario(usuario)
    console.log(response);
    const data = await userManager.crearUsuario()
    console.log(data);
}

usuario()