﻿import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from "react-loader-spinner";

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias);
        } catch (error: any) {
            alert("Erro ao listar categorias");
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">

            {categorias.length === 0 && (
            <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />
            )}

                <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categorias) => (
                    <><CardCategorias key={categorias.id} categorias ={categorias} /></>))}
                    </div>
                </div>
          </div>
          </div>
          </div>

        </>
      )
    }
    
export default ListarCategorias;