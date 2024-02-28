import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar'
import Home from './paginas/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
