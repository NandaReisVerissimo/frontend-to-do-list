const inputTarefa = document.getElementById("tarefa-nova")

let idTarefa = 0

function adicionarTarefa() {
 
    const item = document.createElement("li");
   
    item.id = idTarefa 

    item.innerHTML = `
        <span onclick="concluir"(${idTarefa})">${inputTarefa.value}</span>
        <button class = "concluida" onclick = "concluida (event)">Concluida</button>
        <button class="excluir" onclick="excluir(event)">x</button>`;

       const lista = document.querySelector("#lista");

    lista.appendChild(item);
        idTarefa++;
        inputTarefa.value = ""
        
}

const botaoAdicionar = document.querySelector("#btn-adicionar")
botaoAdicionar.addEventListener("click", adicionarTarefa)

function limparLista() {
    const lista = document.querySelector("#lista");
    lista.innerHTML = ""
}
const botaoLimpar = document.querySelector(".bt-azul")

botaoLimpar.addEventListener("click", limparLista)

function concluir (itemId) {
    const tarefaSelecionada = document.getElementById (itemId);
    tarefaSelecionada.className = "pronto"
}

const botaoConcluir = document.querySelector (".concluida")

botaoConcluir.addEventListener ("click", concluir)

function excluir (itemId) {
    const item = document.querySelector("li");
    item.remove ()
}

const botaoExcluir = document.querySelector (".excluir")

botaoExcluir.addEventListener ("click", excluir)


