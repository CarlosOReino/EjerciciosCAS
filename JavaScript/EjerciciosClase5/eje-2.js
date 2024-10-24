//1.Una función que devuelva el número de cifras de un entero solicitado al usuario

function primero(n) {
  let cifras;
  let entrada;
  entrada = parseInt(prompt("Ingrese un número entero: "));
  cifras = 0;
  if (entrada == 0) {
    alert("Ingrese los números!");
  } else {
    for (let i = 0; i < entrada.length; i++) {
      entrada[i] += cifras;
    }
    alert("El número de cifras es: " + cifras);
  }
  return cifras;
}
