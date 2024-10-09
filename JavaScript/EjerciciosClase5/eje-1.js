//1.Solicita al usuario tres números enteros e indícale cuál es el menor.
function ejercicio1() {
  let a = prompt("Ingrese tres números enteros: ");
  let b = prompt("Ingrese otro número: ");
  let c = prompt("Ingrese otro número: ");
  let menor;
  if (a <= b && a <= c) {
    menor = a;
  } else if (b <= a && b <= c) {
    menor = b;
  } else {
    menor = c;
  }

  alert("El número menor es: " + menor);
}
//2.Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

function ejercicio2() {
  let frase = prompt("Escribe una frase: ");
  let letra = prompt("Escribe una letra: ");
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
      contador++;
    }
  }
  alert(
    "Las veces que aparece la letra : " + letra + " en la frase es: " + contador
  );
}
//3.Suma o resta (según elija el usuario) dos números reales

function ejercicio3() {
  let num1 = parseInt(prompt("Ingrese un número entero: "));
  let num2 = parseInt(prompt("Ingrese otro número entero"));
  let hacer = prompt("Quiere sumar o restar ? ");
  let resultado;
  if (hacer == "sumar") {
    resultado = num1 + num2;
  } else if (hacer == "restar") {
    resultado = num1 - num2;
  } else {
    alert("Elige bien!");
  }
  alert("La operación es: " + resultado);
}
//4.Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)

const ejercicio4 = function () {
  let usuario = "carlos";
  let contra = "verde";
  let contador = 3;
  do {
    let a = prompt("Ingrese el usuario: ");
    let b = prompt("Ingrese la contraseña");

    if (a === usuario && b === contra && contador < 3) {
      alert("Ingreso correcto!");
    } else {
      alert("Incorrecto! tienes 3 intentos: " + contador);
    }
  } while (contador--);
};

//5.Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

var ejercicio5 = () => {
  let solicitar = prompt("Ingresa una letra:(a/b/c)");
  switch (solicitar) {
    case "a":
      alert("7");
      break;
    case "b":
      alert("9");
      break;
    case "c":
      alert("101");
      break;
    default:
      alert("Te has equivocado de letra");
  }
};

//6.Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
function ejercicio6() {
  var ordenar = [
    "burro",
    "gato",
    "loro",
    "perro",
    "armadillo",
    "camaleon",
    "caballo",
  ];
  function burbuja(arreglo) {
    for (i = 0; i < arreglo.length - 1; i++)
      for (j = 0; j < arreglo.length - i; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          aux = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = aux;
        }
      }
    return arreglo;
  }
  ordenar = burbuja(ordenar);
  alert(ordenar);
}
