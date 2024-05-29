
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            alert("Categoria não encontrada!");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria apagada com sucesso");
        } catch (error) {
            alert("Erro ao apagar a categoria");
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <>
            <div className='container w-1/3 mx-auto'>
                <h1 className='text-3xl font-[Lora] font-bold text-center my-4'>Deletar Categoria</h1>
                <p className='text-center font-semibold mb-4'>
                    Você tem certeza de que deseja apagar a categoria a seguir?
                </p>

                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                    <header className="py-2 px-6 bg-blue-300 text-2xl font-[Lora] font-bold">Categoria</header>
                    <p className="p-8 text-3xl bg-blue-100 h-full">{categoria.nome}</p>

                    <div className="flex">
                        <button className="rounded text-white bg-blue-400 hover:bg-blue-500 w-1/2 py-2 mx-auto block" onClick={retornar}>
                            Não
                        </button>

                        <button className="w-full text-white bg-red-400 hover:bg-red-500 flex items-center justify-center py-2" onClick={deletarCategoria}>
                            {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> : <span>Sim</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeletarCategoria;


