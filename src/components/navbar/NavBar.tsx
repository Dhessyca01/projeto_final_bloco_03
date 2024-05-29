import { Basket } from "@phosphor-icons/react"

function Navbar() {




    return (
        <>
     <div className='w-full bg-orange-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>FarmaFair</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <div className='hover:underline'>Sair</div>
               <div className='underline-basket'>
                            <Basket size={25} weight='bold' />
              </div>
            </div>
          </div>
        </div>
    </>
  )

}

export default Navbar



