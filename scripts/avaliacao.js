document.addEventListener("DOMContentLoaded", () => {
    // Footer
    const hoje = new Date()

    const ano = document.querySelector("#anoatual");
    ano.innerHTML = `${hoje.getFullYear()}`;

    const agora = document.querySelector("#ultimaModificacao");
    agora.innerHTML = `Last modification: ${document.lastModified}`;

    // Contador localStorage - requisito da tarefa Passo 4 item 2
    let numAvaliacoes = Number(localStorage.getItem("numAvaliacoes")) || 0;
    numAvaliacoes++;
    localStorage.setItem("numAvaliacoes", numAvaliacoes);
    document.getElementById("contador").textContent = numAvaliacoes;

    // Mostrar dados enviados via GET (opcional, mas melhora a experiência)
    const params = new URLSearchParams(window.location.search);
    const dadosDiv = document.getElementById("dadosEnviados");
    
    if (params.toString()) {
        let html = "<h3>Dados recebidos:</h3><ul>";
        for (const [key, value] of params.entries()) {
            html += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        html += "</ul>";
        dadosDiv.innerHTML = html;
    } else {
        dadosDiv.innerHTML = "<p>Nenhum dado via URL (formulário testado diretamente).</p>";
    }
});
