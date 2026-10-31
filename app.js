console.log("O professor chegou!");

const conversa = document.querySelector(".conversa");

function mostrarMensagem(texto) {
        const balao = document.createElement("div");
    balao.className = "balao professor";
    balao.textContent = texto;
    conversa.appendChild(balao);
}

mostrarMensagem("Olá! Vamos estudar?");
mostrarMensagem("Hoje o assunto é variáveis.");
mostrarMensagem("Uma variável é uma caixa com nome que guarda um valor.");