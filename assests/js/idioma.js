document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const flag = document.getElementById("flag-icon");
    const link = document.getElementById("lang-flag");

    const isEnglish = path.includes("/en/");

    if (isEnglish) {
      flag.src = "https://flagcdn.com/gb.svg";
      flag.alt = "English";
      link.href = "/index.html"; 
      link.title = "Ver en Español";
    } else {
      flag.src = "https://flagcdn.com/es.svg";
      flag.alt = "Español";
      link.href = "/en/index.html"; 
      link.title = "View in English";
    }
  });
