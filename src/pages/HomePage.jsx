import { GitHubIcon, LinkedInIcon, PhoneIcon, EmailIcon, BookmarkIcon } from '../components/common/icons.jsx'
import CopyButton from '../components/common/CopyButton.jsx';
import './HomePage.css'

function HomePage() {

	return(
		<div className='about-me-container container-section'>
			<div className='about-me-content content-section'>
				<h1 className='section-title'>
					<div className='title-first-line'>
						<p className='title-first-color'>Raúl</p>
						<p className='title-second-color'>Ignacio</p>
					</div>
					<div className='title-second-line'>
						<p className='title-first-color'>Ramírez</p>
						<p className='title-second-color'>Sanhueza</p>
					</div>					
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
				<h2>Contáctame</h2>
				<div className='contact-section'>
					<ul className='contact-list'>
						<li className='contact-item'>
							<a href='mailto:raul.ramirez1401@gmail.com'>
								<EmailIcon />
								raul.ramirez1401@gmail.com
							</a>
							<CopyButton text='raul.ramirez1401@gmail.com'/>
						</li>
						<li className='contact-item'>
							<a href='tel:+56942857688'>
								<PhoneIcon />
								+569 4285 7688
							</a>
							<CopyButton text='569 4285 7688'/>
						</li>
						<li className='contact-item'>
							<a href='https://www.linkedin.com/in/ra%C3%BAl-ram%C3%ADrez-sanhueza/' target='_blank' rel='noopener noreferrer'>
								<LinkedInIcon />
								LinkedIn
							</a>
						</li>
						<li className='contact-item'>
							<a href='https://github.com/raul240sx' target='_blank' rel='noopener noreferrer'>
								<GitHubIcon />
								Mi repositorio
							</a>
						</li>
						<li className='contact-item'>
							<a href='/CV_Raul_Ramirez_Sanhueza.pdf' download>
								<BookmarkIcon />
								Descargar CV
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)

};


export default HomePage;