import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <img src="https://greenlife.com.br/logo.png" alt="" />
            </div>
        </nav>
    )
}

export default Navbar