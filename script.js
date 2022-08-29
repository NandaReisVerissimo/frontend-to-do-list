let idTarefa = 0
const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa() {
 
    const item = document.createElement("li");
    idTarefa++;
    item.id = idTarefa 

    item.innerHTML = `
        <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
        <button class="excluir" onclick="excluir(event)">x</button>`;

       const lista = document.querySelector("#lista");
    lista.appendChild(item);

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
    tarefaSelecionada.className = "concluida";
}

function excluir (itemId) {
    const tarefaSelecionada = document.getElementById (itemId);
    tarefaSelecionada.className = "excluir"
    tarefaSelecionada.remove ()
}

const botaoExcluir = document.querySelector (".excluir")
botaoExcluir.addEventListener ("click", excluir)


