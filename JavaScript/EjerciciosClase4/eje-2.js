let frase = prompt("Escribe una frase: ");
let letra = prompt("Escribe una letra: ");
let contador = 0;
for(let i = 0; i<frase.length; i++ ){
    if(frase[i] == letra){
        contador ++;
    }
}
alert("Las veces que aparece la letra : " + letra + " en la frase es: " + contador);