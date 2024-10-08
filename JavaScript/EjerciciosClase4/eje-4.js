let usuario = "carlos";
let contra = "verde";
let contador = 3;
do {
  let a = prompt("Ingrese el usuario: ");
  let b = prompt("Ingrese la contraseña");
    
  if (a === usuario && b === contra && contador <3) {
        alert("Ingreso correcto!");
      } else {
        alert("Incorrecto! tienes 3 intentos: " + contador);
      }
} while (contador--);
