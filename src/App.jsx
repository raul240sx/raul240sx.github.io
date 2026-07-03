import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ExpertisePage from './pages/ExpertisePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx';
import BackgroundPage from './pages/BackgroundPage.jsx';
import NavbarDesktop from './components/navbar/NavbarDesktop.jsx';
import NavbarMobile from './components/navbar/NavbarMobile.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id
          setActiveSection(targetId);
          window.history.replaceState(null, '', `#${targetId}`);
          
        }
      });
    }, options);
    
    const sections = document.querySelectorAll('main.main-content section');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);


  return (
    <ThemeProvider>
      <Router>
        <NavbarDesktop currentSection={activeSection}/>
        <NavbarMobile currentSection={activeSection}/>

        <main className='main-content'>
          {/* Envolvemos cada componente en una sección con ID para el scroll */}
          <section id="home">
            <HomePage />
          </section>
          
          <section id='expertise'>
            <ExpertisePage />
          </section>

          <section id='projects'>
            <ProjectsPage />
          </section>

          <section id='background'>
            <BackgroundPage />
          </section>

        </main>
      </Router>
    </ThemeProvider>
  )
}
export default App
