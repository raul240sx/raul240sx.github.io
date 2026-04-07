import './ExpertisePage.css'; // Archivo para estilos específicos de esta página

const ExpertisePage = () => {
  // Buena práctica: Centralizar los datos para que el JSX sea legible
  const skills = [
    { category: 'Lenguajes & Web', tools: ['Python', 'JavaScript', 'HTML5', 'CSS'] },
    { category: 'Frameworks', tools: ['Django', 'Django Rest Framework', 'React', 'Bootstrap'] },
    { category: 'Bases de Datos', tools: ['PostgreSQL', 'SQL', 'SQLite'] },
    { category: 'Herramientas & DevOps', tools: ['Docker', 'Git/GitHub', 'Nginx', 'Servidores VPS'] }
  ];

  return (
    <div className='expertise-container container-section'>
      {/* --- LADO IZQUIERDO: RELATO --- */}
      <div className='expertise-content content-section'>
        <h1 className='section-title'>
          <p className='title-first-color'>Perfil</p>
          <p className='title-second-color'>Profesional</p>
        </h1>
        
        <p className='about-subtitle'>Ingeniería de Ejecución en Electrónica + Fullstack Dev</p>

        <div className='info-section'>
          <div className='value-cards-container'>
            <div className='value-card'>
              <h3>Diseño de APIs</h3>
              <p>Construyo APIs REST estructuradas, pensando en escalabilidad, separación de responsabilidades y consumo desde frontend desacoplado.</p>
            </div>

            <div className='value-card'>
              <h3>Arquitectura Backend</h3>
              <p>Trabajo con arquitecturas basadas en servicios, organizando lógica de negocio, persistencia y comunicación entre componentes.</p>
            </div>

            <div className='value-card'>
              <h3>Concurrencia y Procesos</h3>
              <p>Implemento tareas asíncronas con Celery y Redis para manejar procesos críticos como reservas de stock y evitar conflictos.</p>
            </div>

            <div className='value-card'>
              <h3>Despliegue y Operación</h3>
              <p>Despliego aplicaciones con Docker, Nginx y VPS, exponiéndolas públicamente y gestionando su funcionamiento en entornos reales.</p>
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