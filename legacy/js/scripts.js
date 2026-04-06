window.addEventListener('DOMContentLoaded', () => {
  // Scrollspy para ambos navbars
  const navLinksDesktop = document.querySelectorAll('#navbarDesktop .nav-link');
  const navLinksMobile = document.querySelectorAll('#navbarMobile .nav-link');
  const sections = document.querySelectorAll('.resume-section');

  function updateActive() {
    const windowBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    let activeSection = sections[0].id;
    if (windowBottom >= docHeight - 2) {
      activeSection = sections[sections.length - 1].id;
    } else {
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 1) {
          activeSection = sections[i].id;
          break;
        }
      }
    }
    navLinksDesktop.forEach(link => link.classList.remove('active'));
    navLinksMobile.forEach(link => link.classList.remove('active'));
    const activeLinkDesktop = document.querySelector(`#navbarDesktop .nav-link[href="#${activeSection}"]`);
    const activeLinkMobile = document.querySelector(`#navbarMobile .nav-link[href="#${activeSection}"]`);
    if (activeLinkDesktop) activeLinkDesktop.classList.add('active');
    if (activeLinkMobile) activeLinkMobile.classList.add('active');
  }

  window.addEventListener('scroll', updateActive);

  // Smooth scroll para ambos navbars
  function addSmoothScroll(links) {
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        let scrollTo = target.offsetTop;
        if (scrollTo > maxScroll) scrollTo = maxScroll;
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      });
    });
  }
  addSmoothScroll(navLinksDesktop);
  addSmoothScroll(navLinksMobile);

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

  //menú hamburguesa oculto al volver a desktop
  const navbarResponsive = document.getElementById('navbarResponsive');
  if (navbarResponsive) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarResponsive, {toggle: false});
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        bsCollapse.show();
      }
    });
  }
});
