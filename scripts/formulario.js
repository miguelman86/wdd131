// Array de produtos fornecido na tarefa
const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];


// Preencher select dinamicamente
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("produto");
    
    produtos.forEach(produto => {
        const option = document.createElement("option");
        option.value = produto.id;
        option.textContent = produto.nome;
        selectElement.appendChild(option);
    });

    // Footer - ano atual e última modificação
  const hoje = new Date()

  const ano = document.querySelector("#anoatual");
  ano.innerHTML = `${hoje.getFullYear()}`;

  const agora = document.querySelector("#ultimaModificacao");
  agora.innerHTML = `Last modification: ${document.lastModified}`;
});
