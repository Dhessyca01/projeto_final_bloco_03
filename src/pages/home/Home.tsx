import { Link } from "react-router-dom";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategoria";

function Home () {

    return (
<>
        <div className=" bg-[#66CDAA] flex justify-center py-12">
            <div className="container grid grid-cols-2 text-white">
        
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">FarmaFair!</h2>
                        <p className="text-xl font-semibold">Os melhores medicamentos e Preço justo você encontra aqui!</p>
                        
                        <div className="flex justify-around gap-4">
                        <Link
                        to="/"
                            className="rounded font-semibold text-white 
                                            border-white border-solid border-2 py-2 px-3 hover:bg-teal-600">Novo Produto</Link>
                        
                            
                        <Link to={'/categorias'}><button className='rounded font-semibold text-white 
                                           border-white border-solid border-2 py-2 px-3 hover:bg-teal-600'>Categorias</button></Link>
                                           
            </div>
            </div>
         
                    <div className="bg-[#66CDAA] flex-justify-center" >
                        <img
                            src="https://ik.imagekit.io/vmo8ef1xo/vitamins-26622_1920.png?updatedAt=1716995290141"
                            alt=""
                            className="w-1/2" />
                    </div>
             </div>
            </div>
            <ListaCategorias/>
            </>

            
    )
}


export default Home;