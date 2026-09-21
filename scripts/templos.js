const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigacao');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date()

    const ano = document.querySelector("#anoatual");
    ano.innerHTML = `${hoje.getFullYear()}`;

    const agora = document.querySelector("#ultimaModificacao");
    agora.innerHTML = `Last modification: ${document.lastModified}`;
})