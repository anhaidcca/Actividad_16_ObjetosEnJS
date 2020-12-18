function Usuario (nombre,correo,edad,comentario){
   this.nombre = nombre;
   this.correo = correo;
   this.edad = edad;
   this.comentario = comentario;
};

const Usuario1 = new Usuario("Ana","ana@gmail.com",25,"actuaria");
const Usuario2 = new Usuario("Lucas", "lgutierrez@gmail.com", 48, "sin comentarios");
const Usuario3 = new Usuario("María", "mrexi@gmail.com",38, "casa verde");

const datos = [Usuario1,Usuario2,Usuario3];
console.log(datos);
