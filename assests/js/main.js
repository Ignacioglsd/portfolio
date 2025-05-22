// Configuración de Swiper (asegúrate de tener el CSS y JS de Swiper cargados)
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Swiper solo si existe el contenedor
  if (document.querySelector('.swiper-container')) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      slidesPerView: 5,
      spaceBetween: 30,
      breakpoints: {
        320: { slidesPerView: 3 },
        768: { slidesPerView: 5 },
      }
    });
  }

  // Animaciones al hacer scroll
  document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    observer.observe(section);
  });

  // Filtrado de proyectos (versión simplificada y unificada)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  function filterProjects(category) {
    projectCards.forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) 
        ? 'block' 
        : 'none';
    });
  }

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover clases activas
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'bg-blue-600');
          btn.classList.add('bg-gray-700');
        });
        
        // Activar botón clickeado
        button.classList.add('active', 'bg-blue-600');
        button.classList.remove('bg-gray-700');
        
        // Filtrar proyectos
        filterProjects(button.dataset.filter);
      });
    });
    
    // Inicializar mostrando todos los proyectos
    filterProjects('all');
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active', 'bg-blue-600');
  }

// Efecto Matrix básico
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#3b82f6';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

 const toggleDark = document.getElementById("toggle-dark");
  toggleDark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

 AOS.init({
    once: true,
    duration: 1000,
  });










});