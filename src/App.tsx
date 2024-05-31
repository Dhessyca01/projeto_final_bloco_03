import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./pages/listaCategorias/ListaCategoria";
import FormCategoria from "./pages/crudCategorias.ts/FormCategoria";
import DeletarCategoria from "./pages/crudCategorias.ts/DeletarCategoria";
import HomePage from "./pages/home/Home";
import Cadastrarcategoria from "./pages/crudCategorias.ts/FormCategoria";


function App() {
  return (
    <>

       <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrar" element={<Cadastrarcategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            
            </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )
}

export default App