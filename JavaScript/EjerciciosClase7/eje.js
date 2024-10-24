//Número de enlaces de la página

let NumEnlaces;
function ejecutar() {
  NumEnlaces = document.getElementsByTagName("a").length;
  alert("Hay " + NumEnlaces + " enlaces");
}

//Dirección a la que enlaza el penúltimo enlace

let PenEnlace;
function penUltimo() {
  PenEnlace = document.getElementsByTagName("a")[5];
  alert("El penúltimo enlace es: " + PenEnlace);
}

//Numero de enlaces que enlazan a http://prueba
let NumDeEnlaces;
let contador = 0;
function enlazanA() {
  NumDeEnlaces = document.getElementsByTagName('a');

  for (let i = 0; i < NumDeEnlaces.length; i++) {
    if(NumDeEnlaces[i].href == "http://prueba/"){
       contador++;
        
    }
    
  }
  alert(contador);
}

//Número de enlaces del tercer párrafo
