import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { DNA } from "react-loader-spinner";
import { listar } from "../../../services/Service";
import { Route, Routes } from "react-router-dom";
import FormCategoria from "../formcategoria/FormCategoria";

function ListaCategorias() {


    const [categorias, setCategorias] = useState<Categoria[]>([])
    async function buscarCategorias() {

        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    <Routes>
          <Route path="/categorias" element={<ListaCategorias />} />
        </Routes>


    return (
        <div className="min-h-[70vh]">

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categorias) => (
                                <>
                                    <FormCategoria key={categorias.id} Categoria={categorias} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaCategorias;