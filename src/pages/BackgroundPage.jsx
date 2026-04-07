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
            Ingeniero en Electrónica con formación en desarrollo web fullstack, orientado al
            desarrollo backend con Python y Django.
          </p>

          <p>
            He trabajado en proyectos propios enfocados en resolver problemas reales,
            incluyendo un e-commerce funcional desplegado en infraestructura propia.
          </p>

          <p>
            Mi experiencia previa liderando equipos técnicos en entornos industriales me
            permite abordar el desarrollo con foco en la eficiencia, la organización y la
            resolución de problemas.
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className='secondary-info-section'>
        
        <div className='extra-block'>
          <h2>Formación</h2>
          <ul>
            <li>Bootcamp Fullstack Python — Desafío Latam</li>
            <li>Ingeniería de Ejecución en Electrónica — Universidad del Bío Bío</li>
          </ul>
        </div>

        <div className='extra-block'>
          <h2>Otros</h2>
          <ul>
            <li>Inglés: Nivel B2</li>
            <li>Experiencia liderando equipos técnicos</li>
            <li>Trabajo en entornos productivos</li>
          </ul>
        </div>

        <div className='extra-block'>
          <h2>Objetivo</h2>
          <p>
            Buscando oportunidades como desarrollador backend o fullstack donde pueda
            aportar en la construcción de sistemas reales y seguir creciendo profesionalmente.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BackgroundPage;