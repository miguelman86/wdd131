// ==========================================
// 1. DADOS E ESTADO DA APLICAÇÃO
// ==========================================

const destinos = [
  { id: 1, nome: "Lençóis Maranhenses", regiao: "Nordeste", tipo: "Parque Natural", descricao: "Dunas brancas e lagoas cristalinas no Maranhão.", imagem: "imagens/lencoes.jpg", gastronomia: "Arroz de cuxá, peixe frito", atividade: "Passeio de barco, mergulho nas lagoas" },
  { id: 2, nome: "Ouro Preto", regiao: "Sudeste", tipo: "Cidade Histórica", descricao: "Patrimônio Mundial com igrejas barrocas e ladeiras de pedra.", imagem: "imagens/ouro-preto.jpg", gastronomia: "Feijão tropeiro, doce de leite", atividade: "Visita a museus, tour histórico" },
  { id: 3, nome: "Fernando de Noronha", regiao: "Nordeste", tipo: "Praia", descricao: "Arquipélago paradisíaco com praias preservadas.", imagem: "imagens/fernando-noronha.jpg", gastronomia: "Frutos do mar, moqueca", atividade: "Mergulho, trilha do Atalaia" },
  { id: 4, nome: "Chapada Diamantina", regiao: "Nordeste", tipo: "Parque Natural", descricao: "Cachoeiras, grutas e trilhas na Bahia.", imagem: "imagens/chapada-diamantina.jpg", gastronomia: "Godó de banana, carne de sol", atividade: "Trilhas, rapel" },
  { id: 5, nome: "Gramado", regiao: "Sul", tipo: "Cidade Histórica", descricao: "Clima europeu, lagos e festival de cinema.", imagem: "imagens/gramado.jpg", gastronomia: "Fondue, chocolate artesanal", atividade: "Passeio no Lago Negro, Snowland" },
  { id: 6, nome: "Amazônia - Manaus", regiao: "Norte", tipo: "Parque Natural", descricao: "Encontro das águas e floresta amazônica.", imagem: "imagens/amazonia.jpg", gastronomia: "Tambaqui, tacacá, açaí", atividade: "Passeio de barco, trilhas na selva" },
  { id: 7, nome: "Rio de Janeiro", regiao: "Sudeste", tipo: "Praia", descricao: "Cristo Redentor, Pão de Açúcar e praias famosas.", imagem: "imagens/rio-janeiro.jpg", gastronomia: "Feijoada, mate com biscoito Globo", atividade: "Bondinho, trilhas, praias" },
  { id: 8, nome: "Bonito", regiao: "Centro-Oeste", tipo: "Parque Natural", descricao: "Rios transparentes e cavernas alagadas.", imagem: "imagens/bonito.jpg", gastronomia: "Pintado na brasa, chipa", atividade: "Flutuação, mergulho" }
];

const culturaGastronomia = [
  { id: 101, nome: "Acarajé da Bahia", regiao: "Nordeste", categoria: "Gastronomia", descricao: "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, caruru e camarão.", imagem: "imagens/acaraje.jpg", origem: "Salvador, BA", curiosidade: "As baianas de acarajé são reconhecidas como Patrimônio da Bahia desde 2004." },
  { id: 102, nome: "Festa Junina de Campina Grande", regiao: "Nordeste", categoria: "Cultura", descricao: "O Maior São João do Mundo com quadrilhas gigantes, forró e comidas típicas.", imagem: "imagens/festa-junina.jpg", origem: "Campina Grande, PB", curiosidade: "Atrai mais de 2 milhões de pessoas por ano." },
  { id: 103, nome: "Tacacá e Açaí Paraense", regiao: "Norte", categoria: "Gastronomia", descricao: "Caldo quente de tucupi, jambu e camarão seco. Servido na cuia com açaí natural e farinha.", imagem: "imagens/tacaca.jpg", origem: "Belém, PA", curiosidade: "O jambu causa tremor nos lábios - é a famosa 'tremeção' amazônica." },
  { id: 104, nome: "Círio de Nazaré", regiao: "Norte", categoria: "Cultura", descricao: "Uma das maiores procissões católicas do mundo acompanhando a imagem de Nazaré.", imagem: "imagens/cirio.jpg", origem: "Belém, PA", curiosidade: "Acontece no segundo sábado de outubro desde 1793." },
  { id: 105, nome: "Feijoada Completa", regiao: "Sudeste", categoria: "Gastronomia", descricao: "Prato nacional feito com feijão preto, carnes salgadas, couve, farofa e laranja.", imagem: "imagens/feijoada.jpg", origem: "Rio de Janeiro, RJ", curiosidade: "Tradicionalmente servida às quartas e sábados." },
  { id: 106, nome: "Samba e Carnaval", regiao: "Sudeste", categoria: "Cultura", descricao: "Desfiles das escolas de samba na Marquês de Sapucaí, patrimônio cultural do Rio.", imagem: "imagens/carnaval1.jpg", origem: "Rio de Janeiro, RJ", curiosidade: "O primeiro desfile oficial foi em 1932." },
  { id: 107, nome: "Churrasco Gaúcho", regiao: "Sul", categoria: "Gastronomia", descricao: "Carnes assadas na brasa, chimarrão e o famoso costelão 12 horas.", imagem: "imagens/churrasco-gaucho.jpg", origem: "Pampas, RS", curiosidade: "O fogo de chão é técnica trazida pelos indígenas e gaudérios." },
  { id: 108, nome: "Oktoberfest de Blumenau", regiao: "Sul", categoria: "Cultura", descricao: "Segunda maior festa alemã do mundo, com chope, danças típicas e trajes bávaros.", imagem: "imagens/blumenau.jpg", origem: "Blumenau, SC", curiosidade: "Criada em 1984 para animar a cidade após uma grande enchente." },
  { id: 109, nome: "Pintado na Brasa - Pantanal", regiao: "Centro-Oeste", categoria: "Gastronomia", descricao: "Peixe de rio assado na brasa com mandioca, chipa e caldo de piranha.", imagem: "imagens/pintado-na-brasa.jpg", origem: "Bonito / Corumbá, MS", curiosidade: "O pintado pode chegar a 1,80m e 80kg." },
  { id: 110, nome: "Cururu e Siriri", regiao: "Centro-Oeste", categoria: "Cultura", descricao: "Dança circular de origem indígena e africana, com viola e cantoria.", imagem: "imagens/siriri.jpg", origem: "Mato Grosso", curiosidade: "Acontece há mais de 200 anos em Poconé e Cuiabá." }
];

// Leitura Segura do LocalStorage
function getFavoritos() {
  try {
    return JSON.parse(localStorage.getItem('favoritosBrasil') || '[]');
  } catch (e) {
    return [];
  }
}

let favoritos = getFavoritos();

// ==========================================
// 2. MÓDULO DE RENDERIZAÇÃO
// ==========================================

function criarCardHTML(destino) {
  const ehFavorito = favoritos.includes(destino.id);
  return `
    <article class="card">
      <img src="${destino.imagem}" alt="${destino.nome}" loading="lazy" decoding="async" width="600" height="350">
      <div class="card-content">
        <span class="tag">${destino.regiao}</span><span class="tag">${destino.tipo}</span>
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
        <p><strong>Gastronomia:</strong> ${destino.gastronomia}</p>
        <p><strong>Atividade:</strong> ${destino.atividade}</p>
        <button class="btn btn-fav" data-id="${destino.id}">
          ${ehFavorito ? '★ Favorito' : '☆ Favoritar'}
        </button>
      </div>
    </article>
  `;
}

function criarCardCultura(item) {
  const ehFav = favoritos.includes(item.id);
  return `
    <article class="card">
      <img src="${item.imagem}" alt="${item.nome}" loading="lazy" decoding="async" width="600" height="350">
      <div class="card-content">
        <span class="tag">${item.regiao}</span><span class="tag">${item.categoria}</span>
        <h3>${item.nome}</h3>
        <p><strong>Origem:</strong> ${item.origem || 'Brasil'}</p>
        <p>${item.descricao}</p>
        <p><em>💡 ${item.curiosidade}</em></p>
        <button class="btn btn-fav" data-id="${item.id}">
          ${ehFav ? '★ Salvo' : '☆ Salvar'}
        </button>
      </div>
    </article>
  `;
}

function renderDestinos(lista) {
  const container = document.getElementById('listaDestinos');
  if (!container) return;
  container.innerHTML = lista.map(criarCardHTML).join('');

  const elTotal = document.getElementById('totalResultados');
  if (elTotal) elTotal.textContent = `Mostrando ${lista.length} destino(s)`;
}

function renderCultura(lista) {
  const container = document.getElementById('listaCultura');
  if (!container) return;
  container.innerHTML = lista.map(criarCardCultura).join('');

  const elTotal = document.getElementById('totalCultura');
  if (elTotal) elTotal.textContent = `Mostrando ${lista.length} experiência(s)`;
}

// ==========================================
// 3. FILTROS E EVENTOS DE FAVORITOS
// ==========================================

function filtrarDestinos() {
  const regiao = document.getElementById('filtroRegiao')?.value || 'todos';
  const tipo = document.getElementById('filtroTipo')?.value || 'todos';

  let filtrados = destinos;
  if (regiao !== 'todos') filtrados = filtrados.filter(d => d.regiao === regiao);
  if (tipo !== 'todos') filtrados = filtrados.filter(d => d.tipo === tipo);

  if (filtrados.length === 0) {
    const container = document.getElementById('listaDestinos');
    if (container) container.innerHTML = '<p>Nenhum destino encontrado. Tente outros filtros.</p>';
    const elTotal = document.getElementById('totalResultados');
    if (elTotal) elTotal.textContent = '0 resultados';
  } else {
    renderDestinos(filtrados);
  }
}

function filtrarCultura() {
  const regiao = document.getElementById('filtroRegiaoCultura')?.value || 'todos';
  const cat = document.getElementById('filtroCategoriaCultura')?.value || 'todos';

  let lista = culturaGastronomia;
  if (regiao !== 'todos') lista = lista.filter(c => c.regiao === regiao);
  if (cat !== 'todos') lista = lista.filter(c => c.categoria === cat);

  if (lista.length === 0) {
    const container = document.getElementById('listaCultura');
    if (container) container.innerHTML = '<p>Nenhuma experiência encontrada. Tente outros filtros.</p>';
    const elTotal = document.getElementById('totalCultura');
    if (elTotal) elTotal.textContent = '0 resultados';
  } else {
    renderCultura(lista);
  }
}

function toggleFavorito(id) {
  const numId = Number(id);
  if (favoritos.includes(numId)) {
    favoritos = favoritos.filter(f => f !== numId);
  } else {
    favoritos.push(numId);
  }
  localStorage.setItem('favoritosBrasil', JSON.stringify(favoritos));

  filtrarDestinos();
  filtrarCultura();
  atualizarContadorFavoritos();
}

function atualizarContadorFavoritos() {
  const el = document.getElementById('contadorFavoritos');
  if (el) el.textContent = `Favoritos salvos: ${favoritos.length}`;
}

// Event Delegation para cliques nos botões de favoritar
document.addEventListener('click', (e) => {
  const target = e.target.closest('.btn-fav');
  if (target && target.dataset.id) {
    toggleFavorito(target.dataset.id);
  }
});

// ==========================================
// 4. FUNCIONALIDADES GERAIS & FORMULÁRIO
// ==========================================

function gerenciarVisitas() {
  let visitas = Number(localStorage.getItem('visitasBrasil') || 0) + 1;
  localStorage.setItem('visitasBrasil', visitas);
  const el = document.getElementById('visitas');
  if (el) el.textContent = `Você já visitou este site ${visitas} vez(es)! Obrigado por explorar o Brasil com a gente.`;
}

function configurarMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navList');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const estaAberto = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', estaAberto);
  });
}

function configurarFormulario() {
  const form = document.getElementById('formContato');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const interesse = document.getElementById('interesse').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    try {
      const contatos = JSON.parse(localStorage.getItem('contatosBrasil') || '[]');
      contatos.push({ nome, email, interesse, mensagem, data: new Date().toISOString() });
      localStorage.setItem('contatosBrasil', JSON.stringify(contatos));
    } catch (err) {
      console.error('Erro ao guardar contato:', err);
    }

    const msg = document.getElementById('mensagemSucesso');
    if (msg) {
      msg.innerHTML = `<p>✅ Obrigado, <strong>${nome}</strong>! Recebemos seu interesse em <strong>${interesse}</strong>. Entraremos em contato em ${email} em breve.</p>`;
    }
    form.reset();
  });
}

// ==========================================
// 5. INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  configurarMenu();
  gerenciarVisitas();
  atualizarContadorFavoritos();
  configurarFormulario();

  if (document.getElementById('listaDestinos')) {
    renderDestinos(destinos);
    document.getElementById('filtroRegiao')?.addEventListener('change', filtrarDestinos);
    document.getElementById('filtroTipo')?.addEventListener('change', filtrarDestinos);
  }

  if (document.getElementById('destaques')) {
    const destaques = destinos.filter(d => [1, 2, 3].includes(d.id));
    document.getElementById('destaques').innerHTML = destaques.map(criarCardHTML).join('');
  }

  if (document.getElementById('listaCultura')) {
    renderCultura(culturaGastronomia);
    document.getElementById('filtroRegiaoCultura')?.addEventListener('change', filtrarCultura);
    document.getElementById('filtroCategoriaCultura')?.addEventListener('change', filtrarCultura);
  }
});