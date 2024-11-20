let textoUsu = document.getElementsByName("texto")[0];
let mostrar = document.getElementById("resultado");

function llamarMatriz() {
    let entrada = textoUsu.value;
    let matriz = entrada.split('\n').map(row => row.split(/\s+/));
    mostrar.innerHTML = "<h3>Elementos en posiciones de fila par y columna impar:</h3>";
    
    matriz.forEach((fila, i) => {

        fila.forEach((elemento, j)=>{

            if (i % 2 === 0 && j % 2 !==0 && isNaN(elemento)) {
                mostrar.innerHTML += `Cada elemento [${i}, ${j}]: ${elemento}<br>`;
            }
        });
    });

}