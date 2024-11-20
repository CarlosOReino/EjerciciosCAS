
function buscarName() {
    const input = document.getElementById("inpUser").value;

    const url = `https://api.github.com/users/${input}`

    fetch(url)
    .then(res => res.json())
    .then(datos => {
        
            document.getElementById('usuario').innerHTML = `
            <hr>
            <img src= "${datos.avatar_url}" alt="${datos.login} width="150" height="150">
            <hr>
            <h2>${datos.login}</h2>
            <p>Respositorios: ${datos.public_repos}</p>
            <hr>
            `;
    });

}

