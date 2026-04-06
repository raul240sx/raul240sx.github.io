import React from 'react';
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
                <h3>Enfoque en Sistemas</h3>
                <p>Diseño arquitecturas backend robustas pensando en el flujo completo de datos.</p>
            </div>
            
            <div className='value-card'>
                <h3>Liderazgo Comprobado</h3>
                <p>Gestión de equipos técnicos y optimización de procesos en entornos de alta exigencia.</p>
            </div>

            <div className='value-card'>
                <h3>Despliegue & Operación</h3>
                <p>Experiencia real en entornos productivos con Docker, Nginx y microservicios.</p>
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