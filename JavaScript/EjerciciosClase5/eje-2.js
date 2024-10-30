//1.Una función que devuelva el número de cifras de un entero solicitado al usuario

function primero(n) {
  let cifras;
  let entrada;
  entrada = prompt("Ingrese un número entero: ");
  cifras = 0;
  if (isNaN(entrada)) {
    alert("Ingrese los números!");
  } else {
     entrada = entrada.toString();
    let cifras = entrada.length;
  
    alert("El número de cifras es: " + cifras);
    return cifras;
  }
  
}

//2.Una función que muestre al usuario una secuencia de _ (se debe construir la cadena de uno en uno), la cantidad de _ será solicitada al usuario

function devolverCadena() {
  let cantidad = prompt("Introduce la cantidad de _ para construir: ");
  cantidad = parseInt(cantidad);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingresa una cantidad válida!");
    return
  }
  let cadena = "";
  for (let i = 0; i < cantidad; i++) {
    cadena += "_"
    
   
  }
  alert("La cadena es: " + cadena);
}

function devolverCadena2() {
  let cantidad = prompt("Introduce la cantidad de _ para construir: ");
  cantidad = parseInt(cantidad);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingresa una cantidad válida!");
    return
  }
  let cadena = "";
  for (let i = 0; i < cantidad; i++) {
    cadena += "*+_"
    
   
  }
  alert("La cadena es: " + cadena);
}