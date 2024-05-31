import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../model/Produto";
import { cadastrar } from "../../services/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import { RotatingLines } from "react-loader-spinner";

function Cadastrarcategoria() {

    const navigate = useNavigate();
  
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  
    const { id } = useParams<{ id: string }>();

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
  
        if (id !== undefined) {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
  
                toastAlerta('Categoria cadastrada com sucesso',"info")
  
            } catch (error: any) {
                toastAlerta('Erro ao cadastrar a Categoria',"info")
            }
        }
  
        setIsLoading(false)
        return();
  
    }
  
    console.log(JSON.stringify(categoria))
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>): void {
        e.preventDefault()
        setIsLoading(true);
    }

    return (
      <div className="bg-[#FFF8DC] flex flex-col justify-center items-center w-full">
      <form className="w-full justify-center w-1/2 border border-[#181716] bg-[#FFFACD]"
      onSubmit={gerarNovaCategoria}>
          <h1 className='text-[#008B8B] font-black-lg'>Cadastrar Categoria</h1>
          <div className="mb-4">
              <label htmlFor="tema" className="flex-row gap-4 text-align text-3xl text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] text-[#FFFACD]">Categoria:</label>
              <input
                  type="text"
                  id="descricao"
                  name='nome'
                  placeholder="Digite sua categoria"
                  required
                  className="mt-1 block w-10/12 h-10 p-2 
                  border border-[#5F9EA0] rounded-md shadow-sm 
                  ring-blue-[#5F9EA0] focus:border-[#008B8B]
                  bg-[#FFE4B5]"
                  //focus:outline-none focus:
                  value = {categoria.nome}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                  
          </div>
  
          <div className="flex justify-center">
  
          <button
                      className="w-1/2 h-full text-branco text-center font-sans font-light bg-azul border border-azul 
                      rounded-md px-4 py-2 hover:bg-verde hover:text-branco hover:border-verde
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
              
                  </div>
              </form>
      </div>
          )
      }
      
      export default Cadastrarcategoria


  