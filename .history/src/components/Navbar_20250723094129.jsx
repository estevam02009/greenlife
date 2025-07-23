import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center">
                    <img src="https://greenlifecashew.com.br/wp-content/uploads/2021/05/logo_header.png" alt="Logo da Empresa" className="h-15 w-30 mr-2" />
                </div>
                {/* Navegação */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Company</a>
                    </li>
                </ul>
            </div>

            
        </nav>
    )
}

export default Navbar