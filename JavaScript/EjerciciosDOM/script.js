function crearDD(tipo, texto) {
  //creamos el texto del dd
  let text1 = document.createTextNode(texto);
  //creamos el primer dd que contendra el text1
  let nodo;
  if (tipo == "dt") {
    nodo = document.createElement("dt");
  } else {
    nodo = document.createElement("dd");
  }

  nodo.appendChild(text1);

  return nodo;
}
