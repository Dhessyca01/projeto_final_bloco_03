import { Link} from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
    categoria: Categoria
    }
    
    function CardCategorias({ categoria }: CardCategoriasProps) {
        return (
        <>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-blue-300 text-2xl font-[Lora] font-bold">Categoria</header>
                <p className="p-8 text-3xl bg-blue-100 h-full">{categoria.nome}</p>

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