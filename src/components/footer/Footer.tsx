import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";




function Footer() {
    let data = new Date().getFullYear();


    return (
      <>
        <div className="flex justify-center  bg-[#7c2d12] text-white">
          <div className="container flex flex-col items-center py-3">
            <p className="text-xl font-bold"> Projeto Farmácia - Dhessyca Sousa - Em parceria com{" "}
              <a href="https://brazil.generation.org/" target="_blank" className="text-orange-300 hover:underline">
                Generation Brasil
              </a>
            </p>
          </div>
            <p className="text-center my-2 text-center text-xl font-Helvetica ">Acesse nossas redes sociais</p>

                    <div className='flex gap-3'>
                        <a href="https://github.com/Dhessyca01" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/dhessyca-s/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
        </>
    );
}

export default Footer