import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import { Link } from "@phosphor-icons/react/dist/ssr/Link"



function Footer() {


    return (
      <>
        <div className="flex justify-center  bg-[#0369a1] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold"> Dhessyca Sousa | Copyright: </p>
            <p className="text-lg">Acesse minhas redes sociais</p>
            <div className="flex items-center mt-1 space-x-3">
              <Link
                to="https://github.com/Dhessyca01"
                target="_blank"
                className="text-white-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <GithubLogo className="size-6" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/dhessyca-s/"
                target="_blank"
                className="text-white-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <LinkedinLogo className="size-6" />
              </Link>
              <Link
                to="/"
                className="text-white-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <InstagramLogo className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer
