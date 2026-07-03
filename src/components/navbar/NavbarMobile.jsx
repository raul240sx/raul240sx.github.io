import { useState } from 'react';
import { MenuIcon } from '../common/icons';
import { useTheme } from '../../context/ThemeContext';
import './NavbarMobile.css'



function NavbarMobile({ currentSection }) {
  const { theme, toggleTheme } = useTheme();
  const [ isOpen, setIsOpen ] = useState(false);
  const navItems = [
    { name: 'Acerca de mí', path: 'home' },
    { name: 'Perfil Profesional', path: 'expertise' },
    { name: 'Proyectos', path: 'projects' },
    { name: 'Formación y Trayectoria', path: 'background' },
  ];

  const handleClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false)

    const targetId = item.path.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior : 'smooth' });
    }

  };


  // LOG PARA DEPURAR:
  console.log('Comparando:', { currentSection, navItems });




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
          <a href={`#${item.path}`} className={`nav-item-mobile ${item.path === currentSection ? 'active' : ''}`} key={idx} onClick={(e) => handleClick(e, item)}>{item.name} </a>
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