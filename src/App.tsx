import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import Perfil from "./pages/perfil/Perfil";
import CardCategorias from "./components/categorias/cardcategorias/CardCategorias";


function App() {
  return (
    <>

       <BrowserRouter>
        <Navbar />

    <div className="font-inter flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        </div>

        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;