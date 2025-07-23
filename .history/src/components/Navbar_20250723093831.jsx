import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <img src="https://greenlifecashew.com.br/wp-content/uploads/2021/05/logo_header.png" alt="Logo da Empresa" className="h-20 w-40 mr-2" />
            </div>

            {/* Navegação */}
            <ul className="flex space-x-6"></ul>
        </nav>
    )
}

export default Navbar