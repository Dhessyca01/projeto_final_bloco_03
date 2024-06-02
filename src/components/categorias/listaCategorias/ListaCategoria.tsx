import { useEffect, useState } from "react";
import CardCategorias from "../cardcategorias/CardCategorias";
import {MagnifyingGlass} from "react-loader-spinner";
import Categoria from "../../../model/Produto";
import { toastAlerta } from "../../../utils/toastAlerta";
import { buscar } from "../../../services/Service";

function ListaCategorias() {


    const [categorias, setCategorias] = useState<Categoria[]>([])
    async function buscarCategorias() {

        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            toastAlerta('Erro ao listar as Categorias', 'info')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);


    return (
            <div className="bg- [#FFE4B5] w-full my-4"> 
            <div className=" bg- [#FFE4B5] flex flex-wrap justify-center">

            {categorias.length === 0 && (
            
            <MagnifyingGlass 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass= "magnifying-glass-wrapper"
                    glassColor="#4169E1"
                    color="#FF0000"
                    />
                )} 


                 <div className="bg-[#FFE4B5] rounded-xl   flex py-8 justify-center w-full my-4">
                 <div className="bg- [#FFE4B5] background-color-[#FFFACD] container flex flex-col">
                 <div className="bg- [#FFE4B5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categorias) => (
                    <CardCategorias key={categorias.id} categoria={categorias} />
                ))}
        </div>
      </div>
      </div>
      </div>
      </div>

    
  );
}
    
export default ListaCategorias;