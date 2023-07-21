import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Menu from './Components/Menu'
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
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App
