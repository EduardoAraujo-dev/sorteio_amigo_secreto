//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos participantes
// Lista de amigos
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
    
    // Adiciona o nome à lista
    amigos.push(nome);
    
    // Atualiza a exibição da lista
    atualizarLista();
    
    // Limpa o campo de input
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        // Botão para remover nome individualmente
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remove-button");
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
    if (amigos.length === 0) {
        alert("Adicione nomes antes de sortear!");
        return;
    }

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    // Limpa a lista de participantes
    amigos = [];
    atualizarLista();

    // Exibe o resultado do sorteio em destaque
    exibirResultado(nomeSorteado);
}

function exibirResultado(nome) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores

    const li = document.createElement("li");
    li.textContent = `🎉 ${nome} foi sorteado! 🎉`;
    li.classList.add("sorteado");

    resultadoLista.appendChild(li);
}
