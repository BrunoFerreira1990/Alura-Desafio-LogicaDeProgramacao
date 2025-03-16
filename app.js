let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    listaAmigos.push(nomeAmigo);
    document.getElementById('amigo').value = "";
    imprimirNomes();
}

function imprimirNomes() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaAmigos[i];
        itemLista.setAttribute('role', 'listitem'); 
        listaHTML.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li role="listitem">Amigo sorteado: ${amigoSorteado}</li>`;
}