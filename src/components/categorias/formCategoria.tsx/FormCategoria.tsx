import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { atualizar, cadastrar, buscar} from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/toastAlerta";


    function FormCategoria() {

        const navigate = useNavigate();

        const [isLoading, setIsLoading] = useState<boolean>(false)
        const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
      
        const { id } = useParams<{ id: string }>();
      
        async function buscarPorId(id: string) {
          try {
            await buscar(`/categorias/${id}`, setCategoria)
          } catch (error: any) {
            toastAlerta('Categoria não encontrada!', 'info')
            retornar();
          }
        }
      
        useEffect(() => {
          if (id !== undefined) {
            buscarPorId(id)
          }
        }, [id])
      
        function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
          setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
          })
        }
      
        async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
          e.preventDefault()
          setIsLoading(true)
      
          if (id !== undefined) {
            try {
              await atualizar(`/categorias`, categoria, setCategoria)
      
              toastAlerta('Categoria atualizada com sucesso', 'info')
      
            } catch (error: any) {
                toastAlerta('Erro ao atualizar o Categoria', 'info')
            }
      
          } else {
            try {
              await cadastrar(`/categorias`, categoria, setCategoria)
      
              toastAlerta('Categoria cadastrada com sucesso', 'info')
      
            } catch (error: any) {
                toastAlerta('Erro ao cadastrar a Categoria', 'info')
            }
          }
      
          setIsLoading(false)
          retornar();
      
        }
      
        function retornar() {
          navigate("/categorias")
        }
      
        return (
    <div className="flex justify-center py-12 bg-[#66CDAA] flex flex-col justify-center items-center w-full">
    <h1 className='text-[#8B4513] text-4xl my-8 font-black '>{id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}</h1>
    <form className="flex flex-col gap-10 text-[##8FBC8] bg-[#66CDAA]"
    onSubmit={gerarNovaCategoria}>
       
        <div className="mb-10">
            <label htmlFor="tema" className="flex-row gap-6 text-4xl text-[#FFF8DC] font-bold ">Categoria:</label>
            <input
                type="text"
                placeholder="Categoria"
                name='nome'
                className="mt-8 block w-10/12 h12 p-2 text-[#FFF8DC] font-bold
                border border-[#181716] rounded-md shadow-sm 
                ring-blue-[#DEB887] focus:border-[#DEB887]
                bg-[#FF6347]"
                required
                value = {categoria.nome}
                onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                
        </div>

        <button
                    className="w-1/2 h-full text-[#FFFFFF] text-center font-sans font-light bg-[#008B8B] border border-[#F4A460] 
                    rounded-md px-5 py-2 hover:bg-verde hover:text-[#FFFFFF] hover:border-verde
                    transition duration-700 ease-ease flex justify-center items-center"
                    type="submit">{isLoading ?
                          <RotatingLines
                          strokeColor="white"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="24"
                          visible={true}
                          /> : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }
                        

                        </button>
            
            </form>
    </div>
        )
    }
    
    export default FormCategoria
