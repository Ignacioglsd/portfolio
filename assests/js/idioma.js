const isEnglish = window.location.pathname.startsWith("/en");

  const currentImg = document.getElementById("flag-current");
  const otherImg = document.getElementById("flag-other-img");
  const otherLink = document.getElementById("flag-other");
  const dropdown = document.getElementById("flag-dropdown");
  const toggleBtn = document.getElementById("flag-toggle");
  const arrow = document.getElementById("flag-arrow");

 // if (isEnglish) {
 //   currentImg.src = "/assets/img/icons8-circular-de-gran-bretaña-48.png";
  //  otherImg.src = "/assets/img/icons8-circular-españa-48.png";
   // otherLink.href = "/index.html";
 // }

  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("invisible");
    arrow.classList.toggle("rotate-180");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative.inline-block")) {
      dropdown.classList.add("opacity-0", "invisible");
      arrow.classList.remove("rotate-180");
    }
  });
