// Redirecionar para a segunda página
function irParaSegundaPagina() {
  window.location.href = "pagina2.html";
}

// Criar chuva de "eu te amo"
function criarChuva() {
  const amor = document.createElement("div");
  amor.classList.add("amor");
  amor.style.left = Math.random() * window.innerWidth + "px";
  amor.style.animationDuration = (Math.random() * 3 + 3) + "s";
  amor.innerText = "eu te amo ❤️";

  document.body.appendChild(amor);

  setTimeout(() => {
    amor.remove();
  }, 5000);
}

setInterval(criarChuva, 200);