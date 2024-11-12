const preguntas = [
  {
    pregunta: "Quién invento JavaScript?",
    respuesta: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Steve Jobs",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "Quién pinto La vocación de San Mateo?",
    respuesta: {
      a: "Leonardo Da Vinci",
      b: "Caravaggio",
      c: "Rubens",
      d: "Velázquez",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "En que bando estaban los aliados ?",
    respuesta: {
      a: "España - Italia",
      b: "Italia - Alemania",
      c: "Israel - Francia",
      d: "Gran Bretaña - EEUU",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "A qué autor pertenece la canción LOVE T.K.O ?",
    respuesta: {
      a: "Otis Reading",
      b: "Samuel L. Jackson",
      c: "Teddy Pendergrass",
      d: "Marvin Gaye",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "Quién fue el director de la película Interstellar ?",
    respuesta: {
      a: "Christopher Nolan",
      b: "Samuel L. Jackson",
      c: "Pedro Almodóvar",
      d: "Steven Spielberg",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "Quién creo Apple ?",
    respuesta: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Steve Jobs",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "Quién pinto La Adoración de los Reyes Magos ?",
    respuesta: {
      a: "Leonardo Da Vinci",
      b: "Caravaggio",
      c: "Rubens",
      d: "Velázquez",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "Quiénes disputaron la Eurocopa 2024 ?",
    respuesta: {
      a: "España - Italia",
      b: "Argentina - Austria",
      c: "Israel - Australia",
      d: "México - EEUU",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "A que autor pertenece la canción Black SKinhead",
    respuesta: {
      a: "Jay-Z",
      b: "Kanye West",
      c: "Eminem",
      d: "50 Cent",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "Quién fue el director de la película Goodfellas",
    respuesta: {
      a: "Christopher Nolan",
      b: "Martin Scorsese",
      c: "Pedro Almodóvar",
      d: "Steven Spielberg",
    },
    respuestaCorrecta: "b",
  },
];

let preguntaID = document.getElementById("pregunta");
let opcion1 = document.getElementById("a");
let opcion2 = document.getElementById("b");
let opcion3 = document.getElementById("c");
let opcion4 = document.getElementById("d");
let indicePregunta = 0;
let respuestasUsu = [];

function mostrarPregunta(indice) {
  //limpiamos cada opción
  let opciones = [opcion1, opcion2, opcion3, opcion4];
  opciones.forEach((opcion) => {
    opcion.classList.remove(
      "opcion-seleccionada",
      "respuesta-correcta",
      "respuesta-incorrecta"
      
    );
    opcion.onclick = null;
  });
  preguntaID.innerText = preguntas[indice].pregunta;
  opcion1.innerText = preguntas[indice].respuesta.a;
  opcion2.innerText = preguntas[indice].respuesta.b;
  opcion3.innerText = preguntas[indice].respuesta.c;
  opcion4.innerText = preguntas[indice].respuesta.d;

  // Reactivar los eventos de clic para seleccionar una respuesta
  opcion1.onclick = function () {
    respuestaSeleccionada("a", opcion1);
  };
  opcion2.onclick = function () {
    respuestaSeleccionada("b", opcion2);
  };
  opcion3.onclick = function () {
    respuestaSeleccionada("c", opcion3);
  };
  opcion4.onclick = function () {
    respuestaSeleccionada("d", opcion4);
  };
}
mostrarPregunta(indicePregunta);


let siguienteBtn = document.getElementById("siguiente");


//Función para pasar a la siguiente pregunta y aumentar

siguienteBtn.addEventListener("click", function () {
  if (indicePregunta < preguntas.length - 1) {
    indicePregunta++;
    mostrarPregunta(indicePregunta);
  } else {
    resultadoFinal();
  }
});
//Función que se ejecuta al hacer click en una respuesta

function respuestaSeleccionada(opcionSleccionada, opcionElemento) {
    let opciones = [opcion1, opcion2, opcion3, opcion4];
    opciones.forEach( opcion => {
      opcion.classList.remove("opcion-seleccionada", "respuesta-correcta", "respuesta-incorrecta");
  });

  //Marcamos la opcion seleccionada
  opcionElemento.classList.add("opcion-seleccionada");
  respuestasUsu[indicePregunta] = opcionSleccionada;

  //Comprobar la respuesta correcta
  if (opcionSleccionada === preguntas[indicePregunta].respuestaCorrecta) {
    opcionElemento.classList.add("respuesta-correcta");
  } else {
    opcionElemento.classList.add("respuesta-incorrecta");
  }

  // evitar qie el usuario cambie una vez sleccionada la respuesta
  
  opciones.forEach((opcion) => {
    opcion.onclick = null;
  });
}


//Función para mostrar la puntuacion.
function calcularPuntuacion() {
  let puntuacion = 0;

  for (let i = 0; i < preguntas.length; i++) {
    if (respuestasUsu[i] === preguntas[i].respuestaCorrecta) {
      puntuacion++;
    }
  }
  return puntuacion;
}

//Función para mostrar el resultado final

function resultadoFinal() {
  let puntuacion = calcularPuntuacion();
  alert("Tu puntuación es: " + puntuacion + " de " + preguntas.length);
}
