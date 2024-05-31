import {  MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container_navBar ">

        <nav className=' bg-[#FF6347]  flex flex-col justify-center items-center w-full mx-auto p-2  border-b-4 border-[#181716]'>
        <ul className='m-0 flex flex-row justify-around items-center gap-3 w-full'>

        <Link to = './'>
            <img className="nav_logo h-[50px] w-[50px] m-7" src="https://ik.imagekit.io/vmo8ef1xo/asclepius.png?updatedAt=1716999775533"
            alt="logo farmácia"/>
        </Link>
        <div className =' my-4 container_text text-align flex flex-row gap-4'>
        <Link to="/" className="my-4 flex-row gap-4 text-align text-3xl text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] cursor-pointer">FarmaFair</Link>
        <Link to = '/'><a className = "my-4 container_text text-align flex flex-row gap-4 text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] cursor-pointer" href="#home">Home</a>
        </Link>      
        </div>
     
                            <form className="my-4 container_text text-align flex flex-row gap-4">
                        <input type="search" name="busca" placeholder="Busque categoria... " required className="text-[#008B8B] text-lg h-10 w-60 p-2.5 ms-2 bg-[#F0E68C] border border[#181716] rounded-xl"/>
                    <button
                         type="submit" className="text-[#008B8B] text-lg h-10 w-10 p-2.5 ms-2 bg-[#F0E68C] border[#181716] rounded-xl hover:bg-[#transparent] hover:opacity-75 transition-opacity duration-200">
                            <MagnifyingGlass size={24} weight="light"/>
                        </button>
                    </form>

                <div className="my-4 container_text text-align flex flex-row gap-4">
                    <p className="text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] cursor-pointer my-4 container_text text-align flex flex-row gap-4">Produtos</p>
                    <Link to="/categorias" className="text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] cursor-pointer my-4 container_text text-align flex flex-row gap-4">Categorias</Link>
                    <Link to="/cadastrarcategoria" className="text-[#F0E68C] font-bold uppercase hover:text-[#008B8B] cursor-pointer my-4 container_text text-align flex flex-row gap-4">Cadastrar categoria</Link>
                    
                    <form className="my-4 container_text text-align flex flex-row gap-4">
                    <button>
                    <p className=""><User size={32} weight="light" 
                    className="text-[#008B8B] hover:opacity-75 transition-opacity duration-200"/></p> </button>
                    <button>
                    <p className=""><ShoppingCartSimple size={32} weight="light" 
                    className="text-[#008B8B] hover:opacity-75 transition-opacity duration-200"/></p> 
                </button>
                </form>
                    
                    <span className="sr-only">Carrinho</span>
                    </div> 

        </ul>
         </nav> 
         
         </div>
    )
}

export default Navbar