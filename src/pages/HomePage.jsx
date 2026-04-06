import { useState } from 'react';
import { DjangoIcon, DjangoRestIcon, PythonIcon, DockerIcon, PostgreIcon, ReactIcon, BootstrapIcon, VpsIcon, NginxIcon, GitHubIcon, LinkedInIcon, PhoneIcon, EmailIcon } from '../components/common/icons.jsx'
import './HomePage.css'

function HomePage() {

	return(
		<div className='about-me-container container-section'>
			<div className='about-me-content content-section'>
				<h1 className='section-title'>
					<p className='title-first-color'>Raúl</p>
					<p className='title-second-color'>Ignacio</p>
					<p className='title-first-color'>Ramírez</p>
					<p className='title-second-color'>Sanhueza</p>
				</h1>
				<p className='about-subtitle'>Desarrollador Backend | Python, Django & REST APIs</p>

				<div className='info-section'>
					<p>
						Desarrollador backend enfocado en Python y Django, con experiencia en el diseño de APIs REST,
						arquitectura basada en microservicios y despliegue de aplicaciones web en entornos reales.
					</p>
					<p>
						He desarrollado proyectos como un e-commerce funcional donde implementé autenticación con JWT,
						 integración de pagos y manejo de concurrencia mediante tareas asíncronas. Además, he trabajado
						 con frontend desacoplado en React consumiendo mis propias APIs.
					</p>
					<p>
						Vengo del área de la ingeniería electrónica, lo que me aporta una base sólida en resolución de
						problemas, pensamiento lógico y trabajo en entornos técnicos exigentes. Actualmente busco
						consolidarme como desarrollador backend, participando en proyectos donde pueda aportar soluciones
						robustas y seguir profundizando en buenas prácticas de desarrollo.
					</p>
				</div>

			</div>
			<div className='secondary-info-section'>
				<h2>Stack principal</h2>
				<p>Backend</p>
				<ul>
					<li><PythonIcon/>Python</li>
					<li><DjangoIcon/>Django</li>
					<li><DjangoRestIcon/>Django Rest Framework (DRF)</li>
				</ul>

				<p>Infraestructura</p>
				<ul>
					<li><DockerIcon/>Docker</li>
					<li><NginxIcon/>Nginx</li>
					<li><VpsIcon/>VPS</li>
				</ul>

				<p>Bases de datos</p>
				<ul>
					<li><PostgreIcon/>PostgreSQL</li>
				</ul>

				<p>Frontend</p>
				<ul>
					<li><ReactIcon/>React</li>
					<li><BootstrapIcon/>Bootstrap</li>
				</ul>
				
			</div>
		</div>
	)

};


export default HomePage;