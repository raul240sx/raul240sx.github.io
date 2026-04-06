import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ExpertisePage from './pages/ExpertisePage.jsx'
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
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/expertise' element={<ExpertisePage/>}/>
          </Routes>
        </main>

      </Router>
    </ThemeProvider>
  )
}

export default App
