import { useState } from 'react';
import { MenuIcon } from '../common/icons';
import { useTheme } from '../../context/ThemeContext';
import './NavbarMobile.css'



function NavbarMobile() {
  const { theme, toggleTheme } = useTheme();
  const [ isOpen, setIsOpen ] = useState(false);
  const navItems = [
    { name: 'Acerca de mí', path: '#home' },
    { name: 'Perfil Profesional', path: '#expertise' },
    { name: 'Proyectos', path: '#projects' },
    { name: 'Formación y Trayectoria', path: '#background' },
  ];

  return(
    <div className='navbar-mobile-container'>
      <div className='navbar-mobile-content'>
        <a href='#home'>Raúl Ramírez</a>
        <button onClick={() => setIsOpen(!isOpen)} className='menu-btn'><MenuIcon/></button>
      </div>

      {isOpen &&
      <>
      <div className='out-menu-section' onClick={() => setIsOpen(false)}></div>

      
      <div className='mobile-menu-items'>
        <p>Secciones</p>
        {navItems.map((item, idx)=> (
          <a href={item.path} className='nav-item-mobile' key={idx} onClick={() => setIsOpen(false)}>{item.name} </a>
        ))}

        <div className='other-functions-mobile'>
          <button onClick={toggleTheme}>Modo {theme === 'light'? 'Oscuro' : 'Claro'}</button>
        </div>
      </div>

      </>
      }
    </div>
  )

}

export default NavbarMobile;