//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos participantes
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    // Adiciona à lista
    amigos.push(nome);
    
    // Atualiza a lista na tela
    atualizarLista();
    
    // Limpa o campo de input
    inputAmigo.value = "";
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        // Botão de remover nome da lista
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
        return;
    }
    
    let sorteio = [];
    let amigosDisponiveis = [...amigos];

    amigos.forEach((amigo) => {
        let possiveis = amigosDisponiveis.filter(a => a !== amigo); // Remove a si mesmo

        if (possiveis.length === 0) {
            alert("Não foi possível realizar o sorteio, tente adicionar mais participantes!");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];

        sorteio.push({ amigo, sorteado });

        // Remove o sorteado da lista
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    sorteio.forEach((par) => {
        const li = document.createElement("li");
        li.textContent = `${par.amigo} → ${par.sorteado}`;
        resultadoLista.appendChild(li);
    });
}

