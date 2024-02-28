import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar'
import Home from './paginas/Home'
import ListaProduto from './componentes/produto/ListaProduto'
import ListaCategoria from './componentes/categoria/ListaCategoria'
import FormularioCategoria from './componentes/categoria/FormularioCategoria'
import DeletarCategoria from './componentes/categoria/DeletarCategoria'
import DeletarProduto from './componentes/produto/DeletarProduto'
import FormularioProduto from './componentes/produto/FormularioProduto'
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produto" element={<ListaProduto />} />

              <Route
                path="/cadastroProduto"
                element={<FormularioProduto />}
              />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route
                path="/deletarProduto/:id"
                element={<DeletarProduto />}
              />


            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
