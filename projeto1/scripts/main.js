// ==========================================
// 1. DADOS E ESTADO DA APLICAÇÃO - VERSÃO ENRIQUECIDA
// ==========================================

const destinos = [
  {
    id: 1,
    nome: "Lençóis Maranhenses",
    regiao: "Nordeste",
    tipo: "Parque Natural",
    estado: "Maranhão",
    cidade: "Barreirinhas",
    descricao: "Dunas brancas e lagoas cristalinas no Maranhão.",
    descricaoLonga: "Um deserto de areia branca pontilhado por centenas de lagoas de água doce azul-turquesa formadas pela chuva. Considerado único no mundo, o Parque Nacional dos Lençóis Maranhenses é um espetáculo que muda de cor e forma a cada estação.",
    historia: "Formado ao longo de milhares de anos pelo depósito de areia trazida pelo Rio Parnaíba e pelo vento, o parque foi criado em 1981 e tem 155 mil hectares. O nome 'Lençóis' vem da aparência das dunas vistas do alto, parecendo lençóis estendidos.",
    imagem: "imagens/lencoes.jpg",
    gastronomia: "Arroz de cuxá, peixe frito, camarão no abacaxi",
    atividade: "Passeio de barco, mergulho nas lagoas",
    melhorEpoca: "Julho a Setembro",
    clima: "Lagoas cheias e sol forte. Temperatura média 28°C",
    duracao: "3 a 4 dias",
    comoChegar: "Voo até São Luís (SLZ), depois 4h de transfer 4x4 até Barreirinhas. De lá, passeios de jardineira.",
    oQueFazer: ["Flutuar na Lagoa Azul e Lagoa Bonita", "Passeio de lancha no Rio Preguiças", "Voo panorâmico sobre as dunas ao pôr do sol", "Visitar a vila de Atins para kitesurf"],
    dicaLocal: "Leve chapéu, óculos e muita água. O ideal é ir com guia local credenciado e fazer o passeio da Lagoa Bonita ao entardecer - a luz é surreal.",
    curiosidades: ["As lagoas não têm ligação com o mar - são 100% água da chuva", "A Lagoa Azul pode ter até 5 metros de profundidade"]
  },
  {
    id: 2,
    nome: "Ouro Preto",
    regiao: "Sudeste",
    tipo: "Cidade Histórica",
    estado: "Minas Gerais",
    cidade: "Ouro Preto",
    descricao: "Patrimônio Mundial com igrejas barrocas e ladeiras de pedra.",
    descricaoLonga: "Primeira cidade brasileira a ser declarada Patrimônio Mundial pela UNESCO (1980). Ouro Preto é um museu a céu aberto do Barroco brasileiro, com 13 igrejas monumentais, chafarizes de pedra-sabão e o legado de Aleijadinho.",
    historia: "Fundada em 1698, no auge do ciclo do ouro, chegou a ser a cidade mais populosa da América Latina. Foi palco da Inconfidência Mineira em 1789. Seu centro preserva o traçado colonial intacto, com casarões e ladeiras que contam a riqueza do Brasil imperial.",
    imagem: "imagens/ouro-preto.jpg",
    gastronomia: "Feijão tropeiro, frango com quiabo, doce de leite com queijo",
    atividade: "Visita a museus, tour histórico",
    melhorEpoca: "Abril a Setembro (seca, clima ameno)",
    clima: "Clima de montanha, 15°C a 24°C, noites frias",
    duracao: "2 a 3 dias",
    comoChegar: "Voo para Belo Horizonte (CNF) + 1h30 de ônibus. De BH saem tours diários.",
    oQueFazer: ["Igreja de São Francisco de Assis - obra-prima de Aleijadinho", "Museu da Inconfidência e Mina da Passagem", "Subir até o Mirante do Morro São Sebastião", "Ateliês de pedra-sabão no distrito de Cachoeira do Campo"],
    dicaLocal: "Use tênis confortável - são muitas ladeiras de pedra. Contrate guia local para entender a simbologia das igrejas.",
    curiosidades: ["Aleijadinho esculpiu amarrando ferramentas nas mãos deformadas pela doença", "Ouro Preto já teve mais ouro circulando que Lisboa no século 18"]
  },
  {
    id: 3,
    nome: "Fernando de Noronha",
    regiao: "Nordeste",
    tipo: "Praia",
    estado: "Pernambuco",
    cidade: "Fernando de Noronha",
    descricao: "Arquipélago paradisíaco com praias preservadas.",
    descricaoLonga: "Arquipélago de 21 ilhas a 545 km de Recife, com o mar mais transparente do Brasil. Parque Nacional Marinho com limite diário de visitantes - por isso permanece selvagem e exclusivo.",
    historia: "Descoberto em 1503, foi prisão, base militar e hoje é Parque Nacional desde 1988 e Patrimônio Natural da Humanidade. A ocupação controlada preserva a vida marinha: golfinhos, tartarugas e tubarões.",
    imagem: "imagens/fernando-noronha.jpg",
    gastronomia: "Frutos do mar, moqueca, peixe na folha de bananeira",
    atividade: "Mergulho, trilha do Atalaia",
    melhorEpoca: "Agosto a Fevereiro (mar calmo para mergulho)",
    clima: "27°C o ano todo, ventos alísios constantes",
    duracao: "4 a 6 dias",
    comoChegar: "Voo direto de Recife ou Natal (2h). Taxa de preservação ambiental (TPA) é obrigatória e paga por dia.",
    oQueFazer: ["Mergulho livre na Baía do Sancho (eleita melhor praia do mundo)", "Trilha da Atalaia com piscina natural e moréias", "Pôr do sol no Forte do Boldró com golfinhos", "Surf na Cacimba do Padre"],
    dicaLocal: "Reserve tudo com 3 meses de antecedência. Leve máscara e nadadeira - o mergulho livre aqui é melhor que em muitos lugares de cilindro.",
    curiosidades: ["A Baía dos Golfinhos recebe até 700 golfinhos rotadores todo amanhecer", "Só 500 visitantes por dia podem entrar no Parque Nacional"]
  },
  {
    id: 4,
    nome: "Chapada Diamantina",
    regiao: "Nordeste",
    tipo: "Parque Natural",
    estado: "Bahia",
    cidade: "Lençóis",
    descricao: "Cachoeiras, grutas e trilhas na Bahia.",
    descricaoLonga: "Um sertão de altitude com vales imensos, cachoeiras de 400 metros, grutas com água azul fluorescente e o charme da vila de Lençóis, base para explorar o Parque Nacional de 152 mil hectares.",
    historia: "No século 19, foi a maior produtora de diamantes do mundo. Quando as jazidas acabaram, a região ficou isolada e preservada. Hoje o diamante é a natureza - garimpos viraram trilhas.",
    imagem: "imagens/chapada-diamantina.jpg",
    gastronomia: "Godó de banana, carne de sol com pirão, cachaça de Abaíra",
    atividade: "Trilhas, rapel",
    melhorEpoca: "Abril a Setembro (cachoeiras cheias, pouca chuva)",
    clima: "Dias quentes (28°C) e noites frias na montanha",
    duracao: "4 a 7 dias",
    comoChegar: "Voo para Salvador + ônibus 6h até Lençóis, ou voo para Vitória da Conquista + 3h.",
    oQueFazer: ["Cachoeira da Fumaça (340m) e Cachoeira do Buracão", "Poço Encantado e Poço Azul - flutuação em água cristalina", "Vale do Pati - trekking de 3 dias considerado o mais bonito do Brasil", "Morro do Pai Inácio ao pôr do sol"],
    dicaLocal: "Contrate guia local obrigatório para a maioria das trilhas. Leve lanterna para as grutas e bota com boa aderência.",
    curiosidades: ["O Poço Encantado tem água tão transparente que parece que as pessoas estão flutuando no ar", "A região tem mais de 400 cachoeiras catalogadas"]
  },
  {
    id: 5,
    nome: "Gramado",
    regiao: "Sul",
    tipo: "Cidade Histórica",
    estado: "Rio Grande do Sul",
    cidade: "Gramado",
    descricao: "Clima europeu, lagos e festival de cinema.",
    descricaoLonga: "Charme alpino no coração da Serra Gaúcha. Gramado une arquitetura bávara, gastronomia de colonização italiana e alemã, chocolates artesanais e o famoso Natal Luz que ilumina a cidade por 2 meses.",
    historia: "Colonizada por alemães e italianos no fim do século 19, cresceu com o turismo a partir dos anos 50. Transformou o frio rigoroso em atração, com hotéis aconchegantes e o Festival de Cinema mais antigo do Brasil (desde 1973).",
    imagem: "imagens/gramado.jpg",
    gastronomia: "Fondue, chocolate artesanal, café colonial",
    atividade: "Passeio no Lago Negro, Snowland",
    melhorEpoca: "Junho-Agosto (frio e fondue) e Outubro-Janeiro (Natal Luz)",
    clima: "Inverno pode nevar (0°C a 15°C), verão ameno 22°C",
    duracao: "3 a 5 dias",
    comoChegar: "Voo para Porto Alegre (POA) + 2h de ônibus/transfer pela Rota Romântica.",
    oQueFazer: ["Lago Negro - pedalinho e araucárias centenárias", "Snowland - primeiro parque de neve indoor da América Latina", "Museu do Festival de Cinema e Hollywood Dream Cars", "Rota do vinho em Bento Gonçalves (1h)"],
    dicaLocal: "Reserve fondue e hotéis com antecedência no inverno. O café colonial serve até 80 itens - vá com fome!",
    curiosidades: ["O Natal Luz usa 4 milhões de lampadinhas", "Gramado tem a maior fábrica de chocolate artesanal da América Latina"]
  },
  {
    id: 6,
    nome: "Amazônia - Manaus",
    regiao: "Norte",
    tipo: "Parque Natural",
    estado: "Amazonas",
    cidade: "Manaus",
    descricao: "Encontro das águas e floresta amazônica.",
    descricaoLonga: "Porta de entrada da maior floresta tropical do mundo. Manaus mistura o luxo do Teatro Amazonas da época da borracha com lodges na selva, comunidades ribeirinhas e o fenômeno do Encontro das Águas.",
    historia: "No auge da borracha (1890-1910), Manaus era a cidade mais rica do Brasil, com luz elétrica e teatro de ópera antes do Rio. O declínio veio com a concorrência asiática, mas deixou um patrimônio histórico único no meio da floresta.",
    imagem: "imagens/amazonia.jpg",
    gastronomia: "Tambaqui assado, tacacá, açaí com farinha, pirarucu de manejo",
    atividade: "Passeio de barco, trilhas na selva",
    melhorEpoca: "Agosto a Dezembro (seca, mais trilhas) - Junho cheia (navegar entre árvores)",
    clima: "Quente e úmido 26°C a 32°C, chuvas rápidas à tarde",
    duracao: "3 a 5 dias",
    comoChegar: "Voo direto para Manaus (MAO) de todo o Brasil. Lodges fazem transfer de barco.",
    oQueFazer: ["Encontro das Águas do Rio Negro e Solimões (6km sem se misturar)", "Pernoite em lodge na selva com focagem de jacarés", "Teatro Amazonas e Mercado Adolpho Lisboa", "Comunidade do Tumbira - turismo de base comunitária"],
    dicaLocal: "Vacina de febre amarela é obrigatória. Leve capa de chuva e repelente. Prefira lodges com guia bilíngue e apoio à comunidade local.",
    curiosidades: ["O Rio Negro tem água a 28°C e o Solimões a 22°C - por isso não se misturam de imediato", "A Amazônia abriga 10% de todas as espécies do planeta"]
  },
  {
    id: 7,
    nome: "Rio de Janeiro",
    regiao: "Sudeste",
    tipo: "Praia",
    estado: "Rio de Janeiro",
    cidade: "Rio de Janeiro",
    descricao: "Cristo Redentor, Pão de Açúcar e praias famosas.",
    descricaoLonga: "Cidade Maravilhosa: única metrópole do mundo com floresta tropical (Tijuca), praias urbanas icônicas e dois cartões-postais que são Patrimônio Mundial. Energia pulsante entre mar e montanha.",
    historia: "Capital do Brasil por 197 anos, foi sede do Império Português. O Cristo Redentor (1931) e o Pão de Açúcar viraram símbolos globais. A paisagem cultural do Rio é Patrimônio da Humanidade desde 2012.",
    imagem: "imagens/rio-janeiro.jpg",
    gastronomia: "Feijoada, mate com biscoito Globo, açaí na pedida",
    atividade: "Bondinho, trilhas, praias",
    melhorEpoca: "Maio a Outubro (menos chuva, mais trilhas) - Dezembro a Março para praias",
    clima: "Verão 30°C-40°C, inverno ameno 22°C",
    duracao: "4 a 7 dias",
    comoChegar: "Dois aeroportos: Santos Dumont (SDU) no centro e Galeão (GIG) internacional. Metrô liga quase tudo.",
    oQueFazer: ["Cristo Redentor ao nascer do sol (menos filas) e Bondinho do Pão de Açúcar", "Trilha do Morro Dois Irmãos e Pedra da Gávea", "Praias: Copacabana, Ipanema, Prainha e Grumari (selvagem)", "Samba na Pedra do Sal segunda-feira e roda de choro no Centro"],
    dicaLocal: "Comece trilhas cedo (7h). Use VLT e metrô. Ipanema Posto 9 e Arpoador são melhores ao pôr do sol.",
    curiosidades: ["A Floresta da Tijuca é a maior floresta urbana replantada do mundo", "O Rio tem mais de 100 trilhas dentro da cidade"]
  },
  {
    id: 8,
    nome: "Bonito",
    regiao: "Centro-Oeste",
    tipo: "Parque Natural",
    estado: "Mato Grosso do Sul",
    cidade: "Bonito",
    descricao: "Rios transparentes e cavernas alagadas.",
    descricaoLonga: "Capital do ecoturismo brasileiro e modelo mundial de turismo sustentável. Rios de calcário com visibilidade de até 40 metros, onde você flutua entre peixes coloridos como se estivesse voando.",
    historia: "Descoberto por fazendeiros nos anos 70, Bonito criou um sistema de voucher único que limita visitantes e repassa dinheiro para preservação. Virou referência da ONU em turismo sustentável.",
    imagem: "imagens/bonito.jpg",
    gastronomia: "Pintado na brasa, chipa, sopa paraguaia, caldo de piranha",
    atividade: "Flutuação, mergulho",
    melhorEpoca: "Maio a Setembro (águas mais cristalinas)",
    clima: "Seco e ensolarado, 20°C a 32°C",
    duracao: "4 a 5 dias",
    comoChegar: "Voo para Campo Grande (CGR) + 4h de ônibus. Ou voo para Bonito (BYO) na alta temporada.",
    oQueFazer: ["Flutuação no Rio da Prata e Aquário Natural", "Gruta do Lago Azul - lago de 90m de profundidade azul cobalto", "Abismo Anhumas - rapel de 72m e mergulho com cilindro", "Boia-cross no Rio Formoso e trilha das cachoeiras Boca da Onça"],
    dicaLocal: "Tudo é com voucher e guia - reserve com 2 semanas de antecedência. Não use protetor solar antes de entrar nos rios.",
    curiosidades: ["A água é tão transparente por causa do calcário que funciona como filtro natural", "Bonito já ganhou 16 vezes o prêmio de melhor destino de ecoturismo do Brasil"]
  }
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
// 2. MÓDULO DE RENDERIZAÇÃO ENRIQUECIDA
// ==========================================

function criarCardHTML(destino) {
  const ehFavorito = favoritos.includes(destino.id);
  return `
    <article class="card card-destino" data-regiao="${destino.regiao}" data-tipo="${destino.tipo}">
      <div class="card-img-wrap">
        <img src="${destino.imagem}" alt="${destino.nome}" loading="lazy" decoding="async" width="600" height="350">
        <span class="badge-melhor">⭐ Melhor: ${destino.melhorEpoca}</span>
      </div>
      <div class="card-content">
        <div class="tags-row">
          <span class="tag">${destino.regiao}</span>
          <span class="tag">${destino.tipo}</span>
          <span class="tag tag-estado">📍 ${destino.estado}</span>
        </div>
        <h3>${destino.nome}</h3>
        <p class="card-desc-curta">${destino.descricaoLonga.substring(0, 140)}...</p>
        
        <div class="quick-info">
          <span>🗓️ ${destino.duracao}</span>
          <span>🌡️ ${destino.clima.split('.')[0]}</span>
        </div>

        <p class="mini-label"><strong>O que fazer:</strong> ${destino.oQueFazer[0]}; ${destino.oQueFazer[1].toLowerCase()}</p>

        <div class="card-actions">
          <button class="btn btn-primary btn-detalhes" data-id="${destino.id}">Ver detalhes completos →</button>
          <button class="btn btn-fav ${ehFavorito ? 'fav-ativo' : ''}" data-id="${destino.id}" aria-label="Favoritar">
            ${ehFavorito ? '★ Favorito' : '☆ Favoritar'}
          </button>
        </div>
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
        <button class="btn btn-fav ${ehFav ? 'fav-ativo' : ''}" data-id="${item.id}">
          ${ehFav ? '★ Salvo' : '☆ Salvar'}
        </button>
      </div>
    </article>
  `;
}

function criarModalHTML(destino) {
  return `
    <div class="modal-header-img" style="background-image:url('${destino.imagem}')">
      <div class="modal-header-overlay">
        <span class="tag">${destino.regiao} • ${destino.estado}</span>
        <h2>${destino.nome}</h2>
        <p>${destino.cidade} - ${destino.descricao}</p>
      </div>
    </div>
    <div class="modal-body">
      <div class="info-grid">
        <div class="info-box"><strong>📅 Melhor época</strong><span>${destino.melhorEpoca}</span><small>${destino.clima}</small></div>
        <div class="info-box"><strong>⏱️ Duração ideal</strong><span>${destino.duracao}</span></div>
        <div class="info-box"><strong>🚗 Como chegar</strong><span>${destino.comoChegar}</span></div>
        <div class="info-box"><strong>🍽️ Gastronomia</strong><span>${destino.gastronomia}</span></div>
      </div>

      <h3>Sobre o lugar</h3>
      <p class="modal-text">${destino.descricaoLonga}</p>

      <h3>História e contexto</h3>
      <p class="modal-text">${destino.historia}</p>

      <h3>🗺️ O que fazer por lá</h3>
      <ul class="check-list">
        ${destino.oQueFazer.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <div class="dica-box">
        <h4>💡 Dica de quem já foi</h4>
        <p>${destino.dicaLocal}</p>
      </div>

      <div class="curios-box">
        <h4>Você sabia?</h4>
        <ul>
          ${destino.curiosidades.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderDestinos(lista) {
  const container = document.getElementById('listaDestinos');
  if (!container) return;
  container.innerHTML = lista.map(criarCardHTML).join('');
  const elTotal = document.getElementById('totalResultados');
  if (elTotal) elTotal.textContent = `Mostrando ${lista.length} destino(s) • Clique em "Ver detalhes completos" para o guia completo`;
}

function renderCultura(lista) {
  const container = document.getElementById('listaCultura');
  if (!container) return;
  container.innerHTML = lista.map(criarCardCultura).join('');
  const elTotal = document.getElementById('totalCultura');
  if (elTotal) elTotal.textContent = `Mostrando ${lista.length} experiência(s)`;
}

// ==========================================
// 3. MODAL DE DETALHES
// ==========================================
function abrirModal(id) {
  const destino = destinos.find(d => d.id === Number(id));
  if (!destino) return;
  const modal = document.getElementById('modalDestino');
  const conteudo = document.getElementById('modalConteudo');
  if (!modal || !conteudo) return;
  conteudo.innerHTML = criarModalHTML(destino);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  // Botão favoritar dentro do modal
  const ehFav = favoritos.includes(destino.id);
  const favBtnModal = document.createElement('div');
  favBtnModal.className = 'modal-fav-wrap';
  favBtnModal.innerHTML = `<button class="btn btn-fav ${ehFav ? 'fav-ativo' : ''}" data-id="${destino.id}">${ehFav ? '★ Favorito' : '☆ Favoritar este destino'}</button>`;
  conteudo.appendChild(favBtnModal);
}

function fecharModal() {
  const modal = document.getElementById('modalDestino');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 4. FILTROS E EVENTOS
// ==========================================

function filtrarDestinos() {
  const regiao = document.getElementById('filtroRegiao')?.value || 'todos';
  const tipo = document.getElementById('filtroTipo')?.value || 'todos';
  const estado = document.getElementById('filtroEstado')?.value || 'todos';
  let filtrados = destinos;
  if (regiao !== 'todos') filtrados = filtrados.filter(d => d.regiao === regiao);
  if (tipo !== 'todos') filtrados = filtrados.filter(d => d.tipo === tipo);
  if (estado !== 'todos') filtrados = filtrados.filter(d => d.estado === estado);

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
  // re-render destaques se existir
  const elDestaques = document.getElementById('destaques');
  if (elDestaques) {
    const destaques = destinos.filter(d => [1,2,3].includes(d.id));
    elDestaques.innerHTML = destaques.map(criarCardHTML).join('');
  }
}

function atualizarContadorFavoritos() {
  const el = document.getElementById('contadorFavoritos');
  if (el) el.textContent = favoritos.length ? `❤️ ${favoritos.length} favorito(s) salvo(s)` : 'Nenhum favorito ainda - clique na estrela para salvar';
}

document.addEventListener('click', (e) => {
  const btnFav = e.target.closest('.btn-fav');
  if (btnFav && btnFav.dataset.id) {
    e.stopPropagation();
    toggleFavorito(btnFav.dataset.id);
    return;
  }
  const btnDetalhes = e.target.closest('.btn-detalhes');
  if (btnDetalhes && btnDetalhes.dataset.id) {
    abrirModal(btnDetalhes.dataset.id);
    return;
  }
  // Fechar modal clicando no fundo ou no X
  if (e.target.id === 'modalDestino' || e.target.closest('#fecharModal')) {
    fecharModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});

// ==========================================
// 5. FUNCIONALIDADES GERAIS & FORMULÁRIO
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
// 6. INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  configurarMenu();
  gerenciarVisitas();
  atualizarContadorFavoritos();
  configurarFormulario();

  if (document.getElementById('listaDestinos')) {
    const selEstado = document.getElementById('filtroEstado');
    if (selEstado && selEstado.options.length <= 1) { [...new Set(destinos.map(d=>d.estado))].sort().forEach(e=>{ const o=document.createElement('option'); o.value=e; o.textContent=e; selEstado.appendChild(o); }); }
    renderDestinos(destinos);
    document.getElementById('filtroRegiao')?.addEventListener('change', filtrarDestinos);
    document.getElementById('filtroTipo')?.addEventListener('change', filtrarDestinos);
    document.getElementById('filtroEstado')?.addEventListener('change', filtrarDestinos);
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
