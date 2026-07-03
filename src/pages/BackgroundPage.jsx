import './BackgroundPage.css';

const BackgroundPage = () => {
  return (
    <div className='background-container container-section'>
      
      {/* IZQUIERDA */}
      <div className='background-content content-section'>
        <h1 className='section-title'>
          <p className='title-first-color'>Formación</p>
          <p className='title-second-color'>y Trayectoria</p>
        </h1>

        <div className='info-section'>
          <p>
            Mi perfil profesional se construye a partir de la ingeniería electrónica y la
            experiencia en entornos industriales, donde desarrollé habilidades de análisis,
            resolución de problemas y liderazgo técnico en equipos de trabajo.
          </p>

          <p>
            Posteriormente me formé en desarrollo de software, especializándome en
            backend con Java (Spring Boot) y Python (Django REST Framework), enfocándome
            en la construcción de APIs y sistemas escalables.
          </p>

          <p>
            He desarrollado proyectos personales de nivel productivo, incluyendo APIs
            REST con Spring Boot y arquitecturas de microservicios con Django, desplegadas
            en entornos reales utilizando Docker y servidores Linux.
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className='secondary-info-section'>
        
        <div className='extra-block'>
          <h2>Formación</h2>
          <ul>
            <li>Especialización Backend Java (Spring Boot) — TodoCode Academy</li>
            <li>Bootcamp Fullstack Python — Desafío Latam</li>
            <li>Ingeniería de Ejecución en Electrónica — Universidad del Bío Bío</li>
          </ul>
        </div>

        <div className='extra-block'>
          <h2>Otros</h2>
          <ul>
            <li>Inglés: Nivel B2</li>
            <li>Experiencia en liderazgo de equipos técnicos industriales</li>
            <li>Trabajo en entornos operativos y de alta exigencia</li>
          </ul>
        </div>

        <div className='extra-block'>
          <h2>Objetivo</h2>
          <p>
            Busco oportunidades como desarrollador backend donde pueda aportar en la
            construcción de sistemas robustos y escalables, mientras continúo fortaleciendo
            mi especialización en Java y arquitecturas backend modernas.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BackgroundPage;