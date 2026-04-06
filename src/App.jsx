import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarDesktop from './components/navbar/NavbarDesktop';
import NavbarMobile from './components/navbar/NavbarMobile';
import { ThemeProvider } from './context/ThemeContext';
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
          </Routes>
        </main>

      </Router>
    </ThemeProvider>
  )
}

export default App
