let amigos = [];

function adicionarAmigo() {
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome antes de adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        campoAmigo.value = '';
        return;
    }

    amigos.push(nomeAmigo);

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.textContent = amigos.join(', ');

    campoAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    if (amigos.length % 2 !== 0) {
        alert('O número de participantes deve ser par para que o sorteio funcione corretamente!');
        return;
    }

    embaralhar(amigos);

    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let indiceSorteado = i + 1;
        if (i == amigos.length - 1) {
            indiceSorteado = 0;
        }

        const amigoAtual = amigos[i];
        const amigoSorteado = amigos[indiceSorteado];

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} -> ${amigoSorteado}`;
        listaResultado.appendChild(itemResultado);
    }
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);


        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').innerHTML = '';
}
