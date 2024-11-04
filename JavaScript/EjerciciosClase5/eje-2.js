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
       cifras[i]++
    }
    alert("El número de cifras es: " + cifras);
  }
  return cifras;
}

//Una función que muestre al usuario una secuencia de _ (se debe construir la cadena de uno en uno), la cantidad de _ será solicitada al usuario

function secuenciaLinea() {
  let entrada = parseInt(prompt("Ingrese la cantidad de ( _ ) que desea relejar: "));
  let c = "";
     for (let i = 0; i < entrada; i++) {
     c +=  "_";
     
    
  }
  alert("Secuencia final: " + c);
}

//Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):

function secDos() {
  let entrada = parseInt(prompt("Ingrese la cantidad de ( _ ) que desea relejar: "));
  let c = "";
     for (let i = 0; i < entrada; i++) {
     c +=  "*+_";
     
    
  }
  alert("Secuencia final: " + c);
}