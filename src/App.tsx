import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/listacategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";


function App() {
  return (
    <>

       <BrowserRouter>
        <Navbar />
        
        <div className="min-h-[68vh]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />

            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
    

        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;