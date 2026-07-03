import './ExpertisePage.css'; // Archivo para estilos específicos de esta página

const ExpertisePage = () => {
  // Buena práctica: Centralizar los datos para que el JSX sea legible
  const skills = [
  {
    category: 'Backend',
    tools: ['Java', 'Spring Boot', 'Spring Data JPA', 'Python', 'Django', 'Django REST Framework']
  },
  {
    category: 'Arquitectura & APIs',
    tools: ['REST APIs', 'Microservicios', 'DTOs', 'JWT', 'Diseño de sistemas backend']
  },
  {
    category: 'Bases de Datos',
    tools: ['PostgreSQL', 'MySQL', 'Hibernate', 'Flyway']
  },
  {
    category: 'DevOps & Despliegue',
    tools: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'VPS', 'Redis', 'Celery']
  },
  {
    category: 'Herramientas',
    tools: ['Git', 'GitHub', 'Maven', 'Postman']
  }
];

  return (
    <div className='expertise-container container-section'>
      {/* --- LADO IZQUIERDO: RELATO --- */}
      <div className='expertise-content content-section'>
        <h1 className='section-title'>
          <p className='title-first-color'>Perfil</p>
          <p className='title-second-color'>Profesional</p>
        </h1>
        
        <p className='about-subtitle'>Backend Developer | Java & Python</p>

        <div className='info-section'>
          <div className='value-cards-container'>

            <div className='value-card'>
              <h3>Diseño de APIs Backend</h3>
              <p>
                Desarrollo APIs REST con Java (Spring Boot) y Django REST Framework, aplicando
                buenas prácticas de diseño, separación de capas y modelos de datos consistentes.
              </p>
            </div>

            <div className='value-card'>
              <h3>Arquitectura de Sistemas</h3>
              <p>
                Diseño backend basado en capas y servicios, estructurando lógica de negocio,
                persistencia y comunicación entre componentes de forma mantenible.
              </p>
            </div>

            <div className='value-card'>
              <h3>Procesos Asíncronos</h3>
              <p>
                Implemento procesamiento en segundo plano con Celery y Redis para operaciones
                críticas como inventario, evitando condiciones de carrera y bloqueos.
              </p>
            </div>

            <div className='value-card'>
              <h3>Despliegue en Producción</h3>
              <p>
                Despliego aplicaciones con Docker sobre VPS Linux utilizando Nginx, gestionando
                entornos reales y exposición de servicios backend.
              </p>
            </div>

          </div>
        </div>
      </div>


      <div className='secondary-info-section'>
        <h2>Stack Tecnológico</h2>
        <div className='stack-container'>
          {skills.map((group, idx) => (
            <div key={idx} className='skill-group'>
              <h3 className='skill-category-title'>{group.category}</h3>
              <div className='tags-grid'>
                {group.tools.map(tool => (
                  <span key={tool} className='skill-tag'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;