import { Link } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { useTheme } from '../../context/ThemeContext';
import './NavbarDesktop.css'

function NavbarDesktop({ currentSection }) {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: 'Acerca de mí', path: 'home' },
    { name: 'Perfil Profesional', path: 'expertise' },
    { name: 'Proyectos', path: 'projects' },
    { name: 'Formación y Trayectoria', path: 'background' },
  ];

  const handleClick = (e, item) => {
    e.preventDefault();

    const targetId = item.path.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior : 'smooth' });
    }

  };



  return(
    <div className='navbar-desktop-container'>
      <div className='navbar-desktop-content'>
        <div className='profile-picture'>
          <img src={profile} alt='img-profile' />
        </div>
        <div className='navbar-desktop-items'>
          <p id='my-name'>Raúl Ramírez Sanhueza</p>
          {navItems.map((item, idx)=> (
            <a href={`#${item.path}`} onClick={(e) => handleClick(e, item)} className={`nav-item ${item.path === currentSection ? 'active' : ''}`} key={idx}>{item.name}</a>
          ))}

        </div>

        <div className='other-functions'>
          <button onClick={toggleTheme}>Modo {theme === 'light'? 'Oscuro' : 'Claro'}</button>
        </div>

      </div>
    </div>
 )
};

export default NavbarDesktop;