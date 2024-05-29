import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import FormCategoria from "../../components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "../../components/categorias/deletarcategoria/DeletarCategoria";
import Popup from "reactjs-popup";


function CategoriaPage() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) navigate("/");

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        navigate("/");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    buscarPorId(id!);
  }, [id]);

  if (!id) navigate("/");

  return (
    <div className="py-12 flex-1">
      <div className="container">
        {isLoading && !categoria && <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />}
        <div className="flex gap-4 flex-col">
          <div className="flex gap-y-4 gap-x-8">
            <h1 className="text-4xl font-medium">{categoria.nome}</h1>

            <Popup trigger={<button className="bg-blue-700 hover:bg-blue-600 focus:bg-blue-600 text-white border rounded border-blue-800 py-2 px-4">Editar Categoria</button>} modal>
              <FormCategoria />
            </Popup>
            <Popup trigger={<button className="bg-red-700 hover:bg-red-600 focus:bg-red-600 text-white border rounded border-red-800 py-2 px-4">Deletar Categoria</button>} modal>
              <DeletarCategoria />
            </Popup>
            </div>
        </div>  
      </div>
    </div>
  );
}

export default CategoriaPage