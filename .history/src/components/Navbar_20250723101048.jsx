import React, { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                {/* LOGO */}
                <div className="flex items-center">
                    <img src="https://greenlifecashew.com.br/wp-content/uploads/2021/05/logo_header.png" alt="Logo da Empresa" className="h-15 w-30 mr-2" />
                </div>

                {/* Botão para Mobile */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-green-600 hover:border-green-600"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                {/* Itens de Navegação - Escondidos no Mobile por padrão, mostrados no Desktop */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <ul className="text-sm lg:flex-grow lg:flex lg:justify-end lg:space-x-6 mt-4 lg:mt-0">
                        <li>
                            <a 
                                href="#"
                                className="block lg:inline-block text-gray-600 hover:text-green-600 mr-4 lg:py-0 transition duration-300"
                            >Company</a>
                        </li>
                    </ul>
                </div>
            </div>

            
        </nav>
    )
}

export default Navbar