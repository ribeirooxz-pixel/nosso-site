const dataInicio = new Date(2025, 8, 24);
const dataNamoro = new Date(2026, 2, 28);

function calcularTempoReal(inicio, fim) {
  let anos = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth() - inicio.getMonth();
  let dias = fim.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(fim.getFullYear(), fim.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return { anos, meses, dias };
}

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
function atualizarContadorNamoro() {
  const hoje = new Date();
  const tempo = calcularTempoReal(dataNamoro, hoje);

  let texto = "";

  if (tempo.anos > 0) {
    texto += tempo.anos + " ano" + (tempo.anos > 1 ? "s" : "") + ", ";
  }

  texto += tempo.meses + " mês" + (tempo.meses !== 1 ? "es" : "") + " e ";
  texto += tempo.dias + " dia" + (tempo.dias !== 1 ? "s" : "") + " 💛";

  document.getElementById("contadorNamoro").innerText = texto;
}
setInterval(atualizarContadorNamoro, 1000);
atualizarContadorNamoro();

setInterval(atualizarContador, 1000);
atualizarContador();

function mostrarMensagem() {
  document.getElementById("surpresa").style.display = "block";
}

function abrirFoto(img) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  document.getElementById("fotoGrande").src = img.src;

  document.getElementById("mensagemFoto").innerText =
    img.getAttribute("data-mensagem");

  const musica = img.getAttribute("data-musica");
  const player = document.getElementById("playerFoto");

  if (musica) {
    player.src = musica;
    player.currentTime = 0;
    player.play().catch(() => {});
  }
}

function fecharFoto() {
  document.getElementById("modal").style.display = "none";
  const player = document.getElementById("playerFoto");
  player.pause();
  player.currentTime = 0;
}

document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target.id === "modal") {
    fecharFoto();
  }
});