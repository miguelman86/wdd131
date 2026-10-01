const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo, Brasil",
        consagracao: "1978, 30 de setembro",
        area: 12000,
        urlDaImagem:
            "imagens/sao_paulo-templo.jpeg"
    },
    {
        nomeDoTemplo: "Campinas Brasil",
        localizacao: "Campinas, Brasil",
        consagracao: "2015, 17 de maio",
        area: 48141,
        urlDaImagem: "imagens/campinas-templo.jpeg"
    },
    {
        nomeDoTemplo: "Rio de Janeiro Brasil",
        localizacao: "Rio de Janeiro, Brasil",
        consagracao: "2022, 8 de maio",
        area: 29966,
        urlDaImagem: "imagens/rio-janeiro-templo.jpeg"
    }
];

const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigacao');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const album = document.querySelector('.album');

function getAno(templo) {
    return parseInt(templo.consagracao.split(',')[0]);
}

function criarCartoes(lista) {
    album.innerHTML = "";
    lista.forEach(templo => {
        const card = document.createElement('section');
        card.classList.add('card');

        const nome = document.createElement('h3');
        nome.textContent = templo.nomeDoTemplo;

        const local = document.createElement('p');
        local.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;

        const consagracao = document.createElement('p');
        consagracao.innerHTML = `<span class="label">Dedicado:</span> ${templo.consagracao}`;

        const area = document.createElement('p');
        area.innerHTML = `<span class="label">Tamanho:</span> ${templo.area} sq ft`;

        const img = document.createElement('img');
        img.src = templo.urlDaImagem;
        img.alt = templo.nomeDoTemplo;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        card.appendChild(nome);
        card.appendChild(local);
        card.appendChild(consagracao);
        card.appendChild(area);
        card.appendChild(img);

        album.appendChild(card);
    });
}

document.querySelectorAll('.navigacao a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filtro = e.target.textContent.trim();

        document.querySelector('main h2').textContent = filtro;

        let filtrados = templos;
        if (filtro === 'Antigo') {
            filtrados = templos.filter(t => getAno(t) < 1900);
        } else if (filtro === 'Novo') {
            filtrados = templos.filter(t => getAno(t) > 2000);
        } else if (filtro === 'Grande') {
            filtrados = templos.filter(t => t.area > 90000);
        } else if (filtro === 'Pequeno') {
            filtrados = templos.filter(t => t.area < 10000);
        }
        // Página Inicial = todos

        criarCartoes(filtrados);
    });
});

criarCartoes(templos);

document.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date()

    const ano = document.querySelector("#anoatual");
    ano.innerHTML = `${hoje.getFullYear()}`;

    const agora = document.querySelector("#ultimaModificacao");
    agora.innerHTML = `Last modification: ${document.lastModified}`;
})