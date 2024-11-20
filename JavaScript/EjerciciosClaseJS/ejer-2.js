let entradaUsu = document.getElementsByName("fruta")[0];
let frutas = ["Pera", "Manzana", "Durazno"]
function añadirFruta() {
    let valor = entradaUsu.value;
    frutas.push(valor);
    frutas.innerHTML = `los frutas son : ` + valor;
}