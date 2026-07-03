import './ProjectsPage.css';
import image1 from '../assets/proyecto1-3.png';
import image2 from '../assets/proyecto2-1.png';
import image3 from '../assets/proyecto3-1.png';
import image4 from '../assets/proyecto4-4.png';
import image5 from '../assets/proyecto5-1.png';


const ProjectsPage = () => {
  const projects = [
    {
      title: "Sales Management API",
      category: "PROYECTO PERSONAL - API REST",
      bullets: [
        "Diseñé e implementé una API REST con Spring Boot para gestionar productos, clientes y ventas mediante una arquitectura en capas y DTOs.",
        "Desarrollé un sistema completo de CRUD con validaciones, manejo global de excepciones y respuestas HTTP estandarizadas utilizando ProblemDetail y ResponseEntity.",
        "Implementé funcionalidades de negocio como generación automática de códigos, reportes de ventas, consulta de productos con bajo stock y borrado lógico (Soft Delete).",
        "Integré persistencia con MySQL utilizando Spring Data JPA, consultas personalizadas con JPQL y migraciones automáticas mediante Flyway.",
        "Desplegué la aplicación en un servidor VPS utilizando Docker Compose, preparada para ser consumida por aplicaciones web y móviles."
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Validation",
        "MySQL",
        "Flyway",
        "Docker Compose",
        "Maven"
      ],
      demo: "https://salesmanagement.ramirezdev.cl",
      repo: "https://github.com/raul240sx/springboot_final_project",
      image: image5
    },
    {
      title: "Frontend para Guitarzone.cl",
      category: "PROYECTO PERSONAL - FRONTEND SPA",
      bullets: [
        "Desarrollé una SPA con React para consumir una API REST propia, separando completamente frontend y backend.",
        "Implementé componentes reutilizables como formularios, modales, carruseles y sistema de navegación.",
        "Gestioné la comunicación con el backend mediante Axios, manejando estados y llamadas asíncronas.",
        "Desplegué el frontend de forma independiente utilizando Docker y Nginx en un servidor propio.",
        "Publiqué la aplicación en dominio propio utilizando Cloudflare para exposición segura."
      ],
      stack: ["React", "JavaScript", "Vite", "Axios", "Nginx", "Docker", "Cloudflare", "VPS"],
      demo: "https://guitarzone.cl/",
      repo: "https://github.com/raul240sx/ecommerce_frontend",
      image: image3
    },
    {
      title: "API y Backend para Guitarzone.cl",
      category: "PROYECTO PERSONAL - MVP E-COMMERCE",
      bullets: [
        "Diseñé e implementé una API REST con Django y DRF para soportar un e-commerce completo, incluyendo productos, usuarios y órdenes.",
        "Desarrollé un sistema de carrito y checkout con integración de pagos mediante MercadoPago.",
        "Implementé un sistema de reserva de stock utilizando Celery y Redis para evitar problemas de concurrencia en compras simultáneas.",
        "Estructuré el backend siguiendo una arquitectura desacoplada, permitiendo su consumo desde un frontend independiente en React.",
        "Desplegué la aplicación en un servidor propio utilizando Docker Compose, Nginx como proxy inverso y exposición pública mediante Cloudflare."
      ],
      stack: ["Django", "DRF", "Micro servicios", "PostgreSQL", "Redis", "Celery", "MercadoPago", "Nginx", "Docker Compose", "VPS"],
      demo: "https://api.guitarzone.cl/", 
      repo: "https://github.com/raul240sx/mi-ecommerce",
      image: image4
    },
    {
      title: "Portal de arriendo de inmuebles",
      category: "PROYECTO FINAL - BOOTCAMP FULLSTACK PYTHON",
      bullets: [
        "Desarrollé una aplicación web con Django y PostgreSQL para la gestión de arriendos entre usuarios.",
        "Implementé un sistema de autenticación con roles diferenciados (arrendador y arrendatario) para controlar accesos y funcionalidades.",
        "Construí funcionalidades CRUD para la gestión de inmuebles y solicitudes de arriendo.",
        "Diseñé el flujo de interacción entre usuarios, permitiendo a los arrendatarios postular a propiedades y a los arrendadores gestionar solicitudes.",  
        "Desplegué la aplicación utilizando Docker Compose para facilitar su ejecución en distintos entornos."
      ],
      stack: ["Django", "PostgreSQL", "Docker", "Docker Compose", "PGAdmin", "Bootstrap"],
      demo: "https://proyectoinmobiliario.ramirezdev.cl",
      repo: "https://github.com/raul-1601/proyecto-inmobiliario",
      image: image1
    },
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