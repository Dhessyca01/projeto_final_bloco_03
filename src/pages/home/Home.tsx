import { Link } from "react-router-dom";
import ListarCategorias from "../../components/categorias/listarcategorias/ListarCategorias";

function Home() {

    return (
        <>
            <div className=" bg-[#0369a1] flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">FarmaFair!</h2>
                        <p className="text-lg font-semibold">Os melhores medicamentos e Preço justo você encontra aqui!</p>
                        <div className="flex justify-around gap-4">
                        <div className="flex justify-around gap-4">

              </div>
                        <Link to={'/categorias'}><button className='rounded  bg-cyan-600 text-white py-2 px-4'>Categorias</button></Link>
            </div>
            </div>
                        
                    <div className="flex justify-end" >
                        <img
                            src="https://ik.imagekit.io/vmo8ef1xo/vitamins-26622_1920.png?updatedAt=1716995290141"
                            alt=""
                            className="w-1/2" />
                    </div>
              </div>       
        </div> 
        <ListarCategorias/> 
        </>
    );
}


export default Home;