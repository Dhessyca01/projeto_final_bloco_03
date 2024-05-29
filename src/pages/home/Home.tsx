function Home() {

    return (
        <>
            <div className=" bg-[#0369a1] flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">FarmaFair!</h2>
                        <p className="text-lg font-semibold">Os melhores medicamentos e Preço justo você encontra aqui!</p>
                        <div className="flex justify-around gap-4">
                            <button className="
                                rounded-b-lg
                                text- white
                                font-bold 
                                border-white
                                border-bold
                                border-4
                                border-sky-500
                                py-3
                                px-5
                                hover:bg-sky-200
                                hover:text-indigo-900                                
                                ">
                                Categorias
                            </button>
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
        </>
    );
}


export default Home;