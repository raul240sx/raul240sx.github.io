import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ExpertisePage from './pages/ExpertisePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx';
import BackgroundPage from './pages/BackgroundPage.jsx';
import NavbarDesktop from './components/navbar/NavbarDesktop.jsx';
import NavbarMobile from './components/navbar/NavbarMobile.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavbarDesktop/>
        <NavbarMobile/>

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
