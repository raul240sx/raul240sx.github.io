import { Link } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { useTheme } from '../../context/ThemeContext';
import './NavbarDesktop.css'

function NavbarDesktop() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
  { name: 'Acerca de mí', path: '#home' },
  { name: 'Perfil Profesional', path: '#expertise' },
  { name: 'Proyectos', path: '#projects' },
  { name: 'Formación y Trayectoria', path: '#background' },
];


  return(
    <div className='navbar-desktop-container'>
      <div className='navbar-desktop-content'>
        <div className='profile-picture'>
          <img src={profile} alt='img-profile' />
        </div>
        <div className='navbar-desktop-items'>
          <p id='my-name'>Raúl Ramírez Sanhueza</p>
          {navItems.map((item, idx)=> (
            <a href={item.path} className='nav-item' key={idx}>{item.name}</a>
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