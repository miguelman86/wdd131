
// Dados - objetos, arrays
const destinos = [
  { id:1, nome:"Lençóis Maranhenses", regiao:"Nordeste", tipo:"Parque Natural", descricao:"Dunas brancas e lagoas cristalinas no Maranhão.", imagem:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600", gastronomia:"Arroz de cuxá, peixe frito", atividade:"Passeio de barco, mergulho nas lagoas" },
  { id:2, nome:"Ouro Preto", regiao:"Sudeste", tipo:"Cidade Histórica", descricao:"Patrimônio Mundial com igrejas barrocas e ladeiras de pedra.", imagem:"https://images.unsplash.com/photo-1593995863951-57d7bdf18a35?w=600", gastronomia:"Feijão tropeiro, doce de leite", atividade:"Visita a museus, tour histórico" },
  { id:3, nome:"Fernando de Noronha", regiao:"Nordeste", tipo:"Praia", descricao:"Arquipélago paradisíaco com praias preservadas.", imagem:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600", gastronomia:"Frutos do mar, moqueca", atividade:"Mergulho, trilha do Atalaia" },
  { id:4, nome:"Chapada Diamantina", regiao:"Nordeste", tipo:"Parque Natural", descricao:"Cachoeiras, grutas e trilhas na Bahia.", imagem:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600", gastronomia:"Godó de banana, carne de sol", atividade:"Trilhas, rapel" },
  { id:5, nome:"Gramado", regiao:"Sul", tipo:"Cidade Histórica", descricao:"Clima europeu, lagos e festival de cinema.", imagem:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600", gastronomia:"Fondue, chocolate artesanal", atividade:"Passeio no Lago Negro, Snowland" },
  { id:6, nome:"Amazônia - Manaus", regiao:"Norte", tipo:"Parque Natural", descricao:"Encontro das águas e floresta amazônica.", imagem:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600", gastronomia:"Tambaqui, tacacá, açaí", atividade:"Passeio de barco, trilhas na selva" },
  { id:7, nome:"Rio de Janeiro", regiao:"Sudeste", tipo:"Praia", descricao:"Cristo Redentor, Pão de Açúcar e praias famosas.", imagem:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600", gastronomia:"Feijoada, mate com biscoito Globo", atividade:"Bondinho, trilhas, praias" },
  { id:8, nome:"Bonito", regiao:"Centro-Oeste", tipo:"Parque Natural", descricao:"Rios transparentes e cavernas alagadas.", imagem:"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600", gastronomia:"Pintado na brasa, chipa", atividade:"Flutuação, mergulho" }
];

// Função 1 - render com template literal (obrigatório)
function criarCardHTML(destino) {
  const ehFavorito = favoritos.includes(destino.id);
  return `
    <div class="card">
      <img src="${destino.imagem}" alt="${destino.nome}" loading="lazy" width="600" height="200">
      <div class="card-content">
        <span class="tag">${destino.regiao}</span><span class="tag">${destino.tipo}</span>
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
        <p><strong>Gastronomia:</strong> ${destino.gastronomia}</p>
        <p><strong>Atividade:</strong> ${destino.atividade}</p>
        <button class="btn" onclick="toggleFavorito(${destino.id})">
          ${ehFavorito ? '★ Favorito' : '☆ Favoritar'}
        </button>
      </div>
    </div>
  `;
}

// Função 2 - render lista (usa array methods)
function renderDestinos(lista) {
  const container = document.getElementById('listaDestinos');
  if (!container) return;
  // usando map e join (array methods)
  container.innerHTML = lista.map(criarCardHTML).join('');
  document.getElementById('totalResultados').textContent = `Mostrando ${lista.length} destino(s)`;
}

// Função 3 - filtro com branch condicional
function filtrarDestinos() {
  const regiao = document.getElementById('filtroRegiao')?.value || 'todos';
  const tipo = document.getElementById('filtroTipo')?.value || 'todos';
  let filtrados = destinos;
  if (regiao !== 'todos') {
    filtrados = filtrados.filter(d => d.regiao === regiao);
  }
  if (tipo !== 'todos') {
    filtrados = filtrados.filter(d => d.tipo === tipo);
  }
  // branch condicional extra
  if (filtrados.length === 0) {
    document.getElementById('listaDestinos').innerHTML = '<p>Nenhum destino encontrado. Tente outros filtros.</p>';
    document.getElementById('totalResultados').textContent = '0 resultados';
  } else {
    renderDestinos(filtrados);
  }
}

// localStorage - favoritos
let favoritos = JSON.parse(localStorage.getItem('favoritosBrasil') || '[]');

function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem('favoritosBrasil', JSON.stringify(favoritos));
  // re-render atual
  filtrarDestinos();
  atualizarContadorFavoritos();
}

function atualizarContadorFavoritos() {
  const el = document.getElementById('contadorFavoritos');
  if (el) el.textContent = `Favoritos salvos: ${favoritos.length}`;
}

// Função 4 - contador de visitas com localStorage
function gerenciarVisitas() {
  let visitas = Number(localStorage.getItem('visitasBrasil') || 0);
  visitas++;
  localStorage.setItem('visitasBrasil', visitas);
  const el = document.getElementById('visitas');
  if (el) el.textContent = `Você já visitou este site ${visitas} vez(es)! Obrigado por explorar o Brasil com a gente.`;
}

// Função 5 - menu mobile (DOM interação)
function configurarMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navList');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Função 6 - formulário (DOM + localStorage + template literal)
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
    const contatos = JSON.parse(localStorage.getItem('contatosBrasil') || '[]');
    contatos.push({ nome, email, interesse, mensagem, data: new Date().toISOString() });
    localStorage.setItem('contatosBrasil', JSON.stringify(contatos));
    const msg = document.getElementById('mensagemSucesso');
    msg.innerHTML = `<p>✅ Obrigado, <strong>${nome}</strong>! Recebemos seu interesse em <strong>${interesse}</strong>. Entraremos em contato em ${email} em breve.</p>`;
    form.reset();
  });
}

// Inicialização
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
    const destaques = destinos.filter(d => [1,2,3].includes(d.id));
    document.getElementById('destaques').innerHTML = destaques.map(criarCardHTML).join('');
  }
});
