let divDatos = document.getElementById("datos");

let url = 'https://openmoji.org/data/openmoji.json'

fetch(url)
.then(res => res.json())
.then(data => {

    data.forEach(cosa => {
        let elemento = document.createElement('div');
        elemento.innerHTML = 
        `<p><strong>Nombre:</strong> ${cosa.annotation}</p>
        <p><strong>Emoji:</strong> &#x${cosa.hexcode}</p>
        <hr>
        `
        divDatos.appendChild(elemento);
    });
})
