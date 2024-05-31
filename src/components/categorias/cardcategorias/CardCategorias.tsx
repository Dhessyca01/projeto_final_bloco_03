import { Link} from "react-router-dom";
import Categoria from "../../../model/Categoria";

interface CardCategoriasProps {
    categoria: Categoria
    }
    
    function CardCategorias({ categoria }: CardCategoriasProps) {
        return (
        <>
            <div className="bg-[#5F9EA0] border flex flex-col rounded-5xl  justify-between">
                <header className="py-2 px-7 bg-[#5F9EA0] text-3xl rounded-5xl font-bold">Categoria</header>
                <p className="p-9 px-18 text-3xl bg-[#F4A460] w-full">{categoria.nome}</p>

                <div className="flex">
                    <Link to={`/editarcategoria/${categoria.id}`} className="w-full text-white bg-blue-400 hover:bg-blue-500 flex items-center justify-center py-2">
                        <button >Editar</button>

                    </Link>
                    
                    <Link to={`/deletarcategoria/${categoria.id}`} className="w-full text-white bg-red-400 hover:bg-red-500 flex items-center justify-center py-2">
                        <button >Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardCategorias;