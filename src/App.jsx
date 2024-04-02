import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import BonusColor from './BonusColor'

function App() {

  return (
    <>
    <div id="container">
      <h1>React Router</h1>
      <div id="navbar">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/blue"><h3>Blue</h3></Link>
        <Link to="/red"><h3>Red</h3></Link>
        <Link to="/bonusColor"><h3>Bonus Color</h3></Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blue' element={<Blue />} />
          <Route path='/red' element={<Red />} />
          <Route path='/bonusColor' element={<BonusColor />} />
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
