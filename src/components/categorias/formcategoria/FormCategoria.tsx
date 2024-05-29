import { ChangeEvent, useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  async function buscarPorId(id: string) {
      try {
          await listar(`/categorias/${id}`, setCategoria);
      } catch (error: any) {
          alert("Categoria não encontrada!");
          retornar();
      }

      <Routes>
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        </Routes>
  }

  useEffect(() => {
      if (id !== undefined) {
          buscarPorId(id);
      }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
          setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
      })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      setIsLoading(true);
      if (id !== undefined) {
          try {
              await atualizar("/categorias", categoria, setCategoria);
              alert("Categoria atualizada com sucesso");

          } catch (error: any) {
              alert("Erro ao atualizar Categoria");
          }
      } else {
          try {
              await cadastrar("/categorias", categoria, setCategoria);
              alert("Categoria cadastrada com sucesso");
          } catch (error: any) {
              alert("Erro ao cadastrar Categoria");
          }
      }
      setIsLoading(false);
      retornar();
  }

  function retornar() {
      navigate("/categorias");
  }
  
  return (
      <>
          <div className="container flex flex-col items-center justify-center mx-auto">
              <h1 className="text-3xl font-[Lora] font-bold text-center my-8">
                  {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
              </h1>

              <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                  <div className="flex flex-col gap-2">
                      <label htmlFor="categoria">Categoria</label>
                      <input type="text" name="nome" className="border-2 border-blue-300 rounded p-2" required value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                  </div>

                  <button type="submit" className="rounded text-white bg-blue-400 hover:bg-blue-500 w-1/2 py-2 mx-auto block">
                      {isLoading ?
                          <RotatingLines
                          strokeColor="white"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="24"
                          visible={true}
                          /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                      }
                  </button>
              </form>
          </div>
      </>
  )
}

export default FormCategoria;