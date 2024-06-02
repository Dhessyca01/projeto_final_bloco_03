import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/listaCategorias/ListaCategoria";
import FormCategoria from "./components/categorias/formCategoria.tsx/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/home/Home";


function App() {
  return (
    <>

       <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'> 
        <Routes>
        <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/criarcategoria" element={<FormCategoria  />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            
            </Routes>
            </div>
        <Footer />
      </BrowserRouter>
      </>
  )
}

export default App