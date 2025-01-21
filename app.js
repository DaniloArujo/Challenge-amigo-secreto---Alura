//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];


function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim(); 

    if (nome === "") {
        alert('Por favor, insira um nome');
        return;
    }

    if (verificaDuplicados(nome)) {
        alert('Usuário já cadastrado');
    } else {
        amigos.push(nome); 
        atualizarLista(); 
    }

    amigoInput.value = "";
}


function verificaDuplicados(nome) {
    return amigos.some(amigo => amigo === nome);
}


function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        resultado.innerHTML = "<li>Adicione pelo menos dois amigos para realizar o sorteio.</li>";
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceSorteado]; 

    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong>!</li>`;
}






