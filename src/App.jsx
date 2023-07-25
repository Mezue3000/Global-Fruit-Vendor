import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/menu" element = {<Menu />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
          <Footer />
        </Router>
        
      </div>
    </>
  )
}

export default App
