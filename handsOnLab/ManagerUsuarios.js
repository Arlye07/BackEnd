const fs = require("fs");

class UserManager {
  constructor(path) {
    this.users = [];
    this.path = path;
  }

  async crearUsuario(usuario) {
    try {
      const { nombre, apellido, edad, curso } = usuario;

      const userInfo = {
        nombre,
        apellido,
        edad,
        curso,
      };
      const existingUser = this.users.find(
          (user) =>
          user.nombre === userInfo.nombre && user.apellido === userInfo.apellido
          );
          if (!existingUser) {
              this.users.push(userInfo);
            }

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.users, null, "\t")
      );

      return "Usuario creado con exito";
    } catch (error) {
      return error;
    }
  }

  async consultarUsuarios() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const response = JSON.parse(data);
      return response;
    } catch (error) {
      throw(error);
    }
  }
}

module.exports = UserManager;
