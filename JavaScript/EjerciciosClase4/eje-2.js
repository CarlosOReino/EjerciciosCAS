let frase = prompt("Escribe una frase: ");
let letra = prompt("Escribe una letra: ");
let contador;
while(letra == frase){
    contador = letra++;
}
alert("Las veces que aparece la letra : " + letra + " " + contador);