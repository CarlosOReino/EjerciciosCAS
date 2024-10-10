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
let contador;
function enlazanA() {
  NumDeEnlaces = document.getElementsByTagName('a').length;

  for (let i = 0; i < NumDeEnlaces.length; i++) {
    if(NumDeEnlaces=[i]&& NumDeEnlaces.href === "http://prueba"){
       contador++;
        
    }
    
  }
  alert(NumDeEnlaces + contador);
}

//Número de enlaces del tercer párrafo
