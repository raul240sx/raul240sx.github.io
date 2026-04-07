import './ProjectsPage.css';
import image1 from '../assets/proyecto1-3.png';
import image2 from '../assets/proyecto2-1.png';
import image3 from '../assets/proyecto3-1.png';
import image4 from '../assets/proyecto4-4.png';


const ProjectsPage = () => {
  const projects = [
    {
      title: "Frontend para Guitarzone.cl",
      category: "PROYECTO PERSONAL - FREELANCE",
      bullets: [
        "Frontend desarrollado con JavaScript, React, Vite, Nginx y Docker Compose.",
        "Diseñada para consumir mi api de api.guitarzone.cl creada con Django Rest Framework.",
        "Cuenta con dominio propio y uso de Axios para las llamadas asíncronas a la API.",
        "Servido a través de mi servidor personal por medio de un Túnel Cloudflare de forma independiente al backend.",
        "Implementa formularios, modales, cards, carruseles, navbar y footer respetando el HTML semántico."
      ],
      stack: ["React", "JavaScript", "Vite", "Axios", "Nginx", "Docker", "Cloudflare", "VPS"],
      demo: "https://guitarzone.cl/",
      repo: "https://github.com/raul240sx/ecommerce_frontend",
      image: image3
    },
    {
      title: "API y Backend para Guitarzone.cl",
      category: "PROYECTO PERSONAL - FREELANCE",
      bullets: [
        "API y backend desarrollado con Django, Django Rest Framework, PostgreSQL, Nginx y Docker Compose.",
        "Cuenta con dominio propio api.guitarzone.cl y servida desde servidor personal por medio de un Túnel Cloudflare.",
        "CRUD completo para la creación y administración de productos musicales, órdenes de compra y usuarios.",
        "Implementa carrito de compra, checkout, dashboard de usuario y API de MercadoPago para pagos.",
        "Cuenta con sistema de reserva y liberación de stock con herramientas de Celery y Redis.",
        "Implementación de proxy inverso con Nginx para mayor seguridad y eficiencia."
      ],
      stack: ["Django", "DRF", "Micro servicios", "PostgreSQL", "Redis", "Celery", "MercadoPago", "Nginx", "Docker Compose", "VPS"],
      demo: "https://api.guitarzone.cl/", // El backend soporta este sitio
      repo: "https://github.com/raul-1601/proyecto-inmobiliario", // Nota: Revisa si este repo es el correcto para Guitarzone, es el que venía en tu HTML
      image: image4
    },
    {
      title: "Portal de arriendo de inmuebles",
      category: "PROYECTO FINAL - BOOTCAMP FULLSTACK PYTHON",
      bullets: [
        "Aplicación web desarrollada con Django, PostgreSQL, PGAdmin y Docker Compose para gestión de arriendos.",
        "Sistema de registro con dos tipos de usuarios: Arrendador y Arrendatario.",
        "CRUD completo para la creación y administración de inmuebles y solicitudes de arriendo.",
        "Flujo de interacción: el arrendador gestiona solicitudes (aceptar/rechazar) y el arrendatario postula a inmuebles."
      ],
      stack: ["Django", "PostgreSQL", "Docker", "Docker Compose", "PGAdmin", "Bootstrap"],
      demo: "https://proyecto-inmobiliario-ybsw.onrender.com",
      repo: "https://github.com/raul-1601/proyecto-inmobiliario",
      image: image1
    },
    {
      title: "E-commerce de postres",
      category: "PROYECTO DE PRÁCTICA - BOOTCAMP FULLSTACK PYTHON",
      bullets: [
        "Aplicación web desarrollada con Django y SQLite para venta de postres normales y premium.",
        "Sistema de registro de usuarios: acceso restringido a productos de mayor calidad solo para registrados.",
        "Implementación de formulario de contacto con persistencia de datos en base de datos.",
        "Vistas de detalle dinámicas para cada producto del catálogo."
      ],
      stack: ["Django", "SQLite", "HTML", "CSS", "Bootstrap"],
      demo: "https://proyecto-tienda-virtual.onrender.com/",
      repo: "https://github.com/rramirez1401/proyecto-tienda-virtual",
      image: image2
    }
  ];

  return (
    <div className='projects-container container-section'>
      <h1 className='section-title'>
          <p className='title-first-color'>Mis</p>
          <p className='title-second-color'>Proyectos</p>
        </h1>
      {projects.map((proj, index) => (
        <div key={index} className='project-row-container '>
          
          <div className='project-details-column content-section'>
            <h2>
              <span>{proj.title.split(' ')[0]}</span>
              <span> {proj.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className='project-subtitle' style={{color: '#27A776', fontWeight: 'bold'}}>
              {proj.category}
            </div>
            <ul className='project-info-list'>
              {proj.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className='github-btn-container'>
              <a href={proj.repo} target='_blank' rel='noreferrer' className='btn-project'>
                 Ver repositorio en GitHub
              </a>
            </div>
          </div>

          <div className='project-visual-column secondary-info-section'>
            <div className='visual-card'>
              <div className='project-preview-box'>
                <img src={proj.image} alt={proj.title} className='project-img' />
                <a href={proj.demo} target='_blank' rel='noreferrer' className='btn-project live-demo-btn'>
                  Ver Demo Live
                </a>
              </div>

              <div className='stack-list'>
                <p className='stack-title'>Desarrollado con:</p>
                <div className='project-stack-list'>
                  {proj.stack.map(s => (
                    <span key={s} className='stack-item'>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;