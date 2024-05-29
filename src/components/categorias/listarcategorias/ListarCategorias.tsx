import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { Route, Routes, useNavigate } from "react-router-dom";
import { listar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

<Routes>
          <Route path="/categorias" element={<ListarCategorias />} />
        </Routes>

function ListarCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  
    async function ListarCategorias() {
      try {
        await listar("/categorias", setCategorias);
      } catch (error: any) {
        if (error.response && error.response.status === 403) {
          navigate("/");
        } else {
          console.error("Erro ao buscar categorias:", error);
        }
      }
    }
  
    useEffect(() => {
      ListarCategorias();
    }, [categorias.length]);
  
    return (
      <>
        {categorias.length === 0 && <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />}
        <div className="flex py-8 justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <ListarCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ListarCategorias;