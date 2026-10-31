console.log("O professor chegou!");

const conversa = document.querySelector(".conversa");
const balao = document.createElement("div");
balao.className = "balao professor";
balao.textContent = "Esta mensagem veio do JavaScript!";
conversa.appendChild(balao);