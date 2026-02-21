// 💛 DATA QUE VOCÊS COMEÇARAM A CONVERSAR
const dataInicio = new Date(2025, 8, 24);
// mês começa do zero → 8 = setembro
/* Calcula diferença real em anos, meses e dias */
function calcularTempoReal(inicio, fim) {
  let anos = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth() - inicio.getMonth();
  let dias = fim.getDate() - inicio.getDate();

  // Ajusta dias negativos pegando dias do mês anterior
  if (dias < 0) {
    meses--;

    // Último dia do mês anterior
    const ultimoMes = new Date(fim.getFullYear(), fim.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  // Ajusta meses negativos
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return { anos, meses, dias };
}

/* Atualiza o contador na tela */
function atualizarContador() {
  const hoje = new Date();
  const tempo = calcularTempoReal(dataInicio, hoje);

  let texto = "";

  if (tempo.anos > 0) {
    texto += tempo.anos + " ano" + (tempo.anos > 1 ? "s" : "") + ", ";
  }

  texto += tempo.meses + " mês" + (tempo.meses !== 1 ? "es" : "") + " e ";
  texto += tempo.dias + " dia" + (tempo.dias !== 1 ? "s" : "") + " 💛";

  document.getElementById("contador").innerText = texto;
}

/* Atualiza automaticamente */
setInterval(atualizarContador, 1000);
atualizarContador();

/* Mostra a mensagem surpresa */
function mostrarMensagem() {
  document.getElementById("surpresa").style.display = "block";
}

/* Abre imagem em tela cheia */
function abrirFoto(img) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  // mostra a foto
  document.getElementById("fotoGrande").src = img.src;

  // mostra a mensagem
  document.getElementById("mensagemFoto").innerText =
    img.getAttribute("data-mensagem");

  // 🎵 toca a música da foto
  const musica = img.getAttribute("data-musica");
  const player = document.getElementById("playerFoto");

  if (musica) {
    player.src = musica;
    player.currentTime = 0;
    player.play().catch(() => {
      // alguns celulares só tocam após interação — já houve clique, então normalmente funciona
    });
  }
}
/* Fecha pelo botão X */
function fecharFoto() {
  document.getElementById("modal").style.display = "none";
  // ⏹️ para a música ao fechar
  const player = document.getElementById("playerFoto");
  player.pause();
  player.currentTime = 0;}

/* Fecha clicando fora do conteúdo */
document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target.id === "modal") {
    fecharFoto();
  }
});