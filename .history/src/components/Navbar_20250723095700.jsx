import React, { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-md">
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
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Products</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Certifications</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Informative</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
                    </li>
                </ul>
            </div>

            
        </nav>
    )
}

export default Navbar