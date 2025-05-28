document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("modoOscuro");
  const iconoSol = document.getElementById("iconoSol");
  const iconoLuna = document.getElementById("iconoLuna");

  
  const modoOscuroGuardado = localStorage.getItem("modoOscuro");

  if (modoOscuroGuardado === "true") {
    document.body.classList.add("modo-oscuro");
    iconoSol.style.display = "none";
    iconoLuna.style.display = "inline";
  } else {
    
    document.body.classList.remove("modo-oscuro");
    iconoSol.style.display = "inline";
    iconoLuna.style.display = "none";
  }

  btnModoOscuro.addEventListener("click", () => {
    const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");
    if (modoOscuroActivo) {
      iconoSol.style.display = "none";
      iconoLuna.style.display = "inline";
      localStorage.setItem("modoOscuro", "true");
    } else {
      iconoSol.style.display = "inline";
      iconoLuna.style.display = "none";
      localStorage.setItem("modoOscuro", "false");
    }
  });
});
