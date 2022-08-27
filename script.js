const inputTarefa = document.getElementById ("tarefa-nova")

function adicionarTarefa () {
    const item = document.createElement ("li");

    item.innerHTML = `<li>
        span>${inputTarefa.value}</span>
        <button class="excluir" >X</button>
</li>`;

    const lista = document.querySelector ("#lista");
    lista.appendChild (item);

    inputTarefa.value = ""
}

const botaoAdicionar = document.querySelector ("#btn-adicionar")
botaoAdicionar.addEventListener ("click", adicionarTarefa)

function limparLista {
    const lista = document.querySelector ("#lista");
    lista.innerHTML = ""
}
const botaoLimpar = document.querySelector (".bt-azul")

botaoLimpar.addEventListener ("click", limparLista)


