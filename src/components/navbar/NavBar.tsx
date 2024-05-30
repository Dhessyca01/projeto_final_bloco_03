import { Basket, MagnifyingGlass, Pill, ShoppingCartSimple, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div className='w-full bg-orange-600 text-white flex justify-center py-2'>
        <div className="  flex justify-center gap-1 text-lg">
        <Pill size={62} weight="thin" />
        <Link to="/home" className="gap-5 text-3xl ms-8 font-mono font-bold uppercase hover:text-blue-800 cursor-pointer">FarmaFair</Link>
        </div>        
        
        <div className="flex justify-center">
                    <form className="">
                        <input type="search" name="busca" placeholder="Busque categoria..." required className="h-9 w-100 rounded-lg p-5 gap-2" />
                        <button type="submit" className="h-10 w-10 p-2.5 ms-2 bg-cyan-500 hover:bg-blue-600 border border-blue-300 hover:border-blue-200 rounded-lg">
                            <MagnifyingGlass size={24} weight="light"/>
                        </button>
                    </form>
                </div>

                <div className="flex justify-center gap-5">
                    <p className="hover:text-black">Produtos</p>
                    <Link to="/categorias" className="hover:text-black">Categorias</Link>
                    <Link to="/cadastrarcategoria" className="hover:text-black">Cadastrar categoria</Link>
                    <div className="hover:text-black"><User size={32} weight="thin" /></div>
                    <div className="hover:text-black"><ShoppingCartSimple size={32} weight="thin" /></div>

                    <button className="flex justify-center items-center justify-center gap-8">
            <div className="relative">
              <Basket className="z-7 size-7" />
              <span className="absolute bottom-[20px] left-5 right-4 flex size-3 items-center justify-center rounded-full bg-primary text-xs font-bold text-black bg-white">0</span>
            </div>
            <span className="sr-only">Carrinho</span>
          </button>
         </div>
    </div>
        </>
    )
}

export default Navbar