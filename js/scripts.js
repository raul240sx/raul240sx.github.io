window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
  const sections = document.querySelectorAll('.resume-section');

  function updateActive() {
    const windowBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    let activeSection = sections[0].id;
    // Si estamos cerca del final de la página, activar la última sección
    if (windowBottom >= docHeight - 2) {
      activeSection = sections[sections.length - 1].id;
    } else {
      // Recorrer de atrás hacia adelante y activar la primera cuyo top esté por encima o igual al top
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 1) {
          activeSection = sections[i].id;
          break;
        }
      }
    }
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`#navbarResponsive .nav-link[href="#${activeSection}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  window.addEventListener('scroll', updateActive);

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      // Calcular el máximo scroll permitido
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let scrollTo = target.offsetTop;
      if (scrollTo > maxScroll) scrollTo = maxScroll;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    });
  });

  // Inicializar sombreado al cargar la página
  updateActive();

  // Dark Mode
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = "☀️ Light Mode";
    }
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem('theme', 'dark');
      } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
