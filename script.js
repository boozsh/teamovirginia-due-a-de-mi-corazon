onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });
  
const goToCarta = document.getElementById("goToCarta");

if (goToCarta) {
goToCarta.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "carta.html";
  }, 800);
});
}

// ====== FECHA CUANDO EMPEZARON ======
// CAMBIA ESTA FECHA POR LA REAL
const fechaInicio = new Date("2025-07-05T00:00:00");

function actualizarContador() {
  const ahora = new Date();

  // -------- DÍAS JUNTOS --------
  const diferenciaTotal = ahora - fechaInicio;
  const dias = Math.floor(diferenciaTotal / (1000 * 60 * 60 * 24));
  document.getElementById("diasJuntos").textContent = dias;

  // -------- PRÓXIMO ANIVERSARIO --------
  let proximoAniversario = new Date(
    ahora.getFullYear(),
    fechaInicio.getMonth(),
    fechaInicio.getDate()
  );

  if (ahora > proximoAniversario) {
    proximoAniversario.setFullYear(ahora.getFullYear() + 1);
  }

  const diferenciaAniversario = proximoAniversario - ahora;

  const diasRestantes = Math.floor(diferenciaAniversario / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenciaAniversario / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenciaAniversario / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenciaAniversario / 1000) % 60);

  document.getElementById("aniversario").textContent =
    `${diasRestantes}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();