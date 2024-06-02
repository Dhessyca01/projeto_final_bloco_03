
import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../model/Categoria";
import { buscar, deletar} from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";


function DeletarCategoria() {
    
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const { id } = useParams<{ id: string }>();

    async function listarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            toastAlerta("Categoria não encontrada!","info");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            listarPorId(id);
        }
    }, [id])

    async function DeletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`)
            toastAlerta("Categoria apagada com sucesso", "info");
        } catch (error) {
            toastAlerta("Erro ao apagar a categoria", "info");
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <>
        <div className='text-[#0E0E0E] text-lg bg-[#F0E68C]  w-full flex flex-col justify-center items-center w-full'>
            <h1 className='text-4xl text-center py-4 font-bold'>Deletar Categoria</h1>
            <p className='text-3xl text-center text-[#FF0000] font-bold mb-10'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='text-center border flex flex-col rounded-4xl w-full justify-between'>
                <header
                    className='py-2 px-6 bg-[#FFD700] text-[#0E0E0E] font-bold text-2xl'>
                    Categoria
                </header>
                <p className='text-[#FFFFFF] p-9 text-4xl text-center bg-[#8FBC8F] w-full'>{categoria.nome}</p>
                <div className="flex">
                    <button
                        className='text-3xl bg-[#FFFFFF] hover:bg-[#008B8B] w-full py-4'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-3xl bg-[#FFFFFF] hover:bg-[#008B8B] w-full py-4'
                        onClick={DeletarCategoria}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeletarCategoria;

