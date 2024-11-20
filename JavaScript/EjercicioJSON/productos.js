let divProductos = document.getElementById("productos");

let url = 'https://fakestoreapi.com/products';

fetch(url)
    .then(res => res.json()) // Convertir respuesta a JSON
    .then(datos => {
        // Mostrar los productos en el div
        datos.forEach(producto => {
            let elemento = document.createElement('div');
            elemento.classList.add('producto');
            elemento.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}">
                <h2>${producto.title}</h2>
                <p><strong>Precio:</strong> $${producto.price}</p>
                <p>${producto.description}</p>
            `;
            divProductos.appendChild(elemento);
        });
    })
    .catch(error => {
        console.error('Error al obtener los productos:', error);
        divProductos.innerHTML = `<p>Error al cargar los productos: ${error.message}</p>`;
    });
