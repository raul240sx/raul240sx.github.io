import { Link } from 'react-router-dom';
import profile from '../../assets/profile.webp'
import { useTheme } from '../../context/ThemeContext';
import './NavbarDesktop.css'

function NavbarDesktop() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: 'Acerca de mí', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Formación', path: '/education' },
    { name: 'Experiencias', path: '/experiences' }
  ]


  return(
    <div className='navbar-desktop-container'>
      <div className='navbar-desktop-content'>
        <div className='profile-picture'>
          <img src={profile} alt='img-profile' />
        </div>
        <div className='navbar-desktop-items'>
          <p id='my-name'>Raúl Ramírez Sanhueza</p>
          {navItems.map((item, idx)=> (
            <Link to ={item.path} className='nav-item' key={idx} >{item.name}</Link>
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