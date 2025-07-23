import React from "react"

const Hero = () => {
    return (
        <div
            className="relative bg-transparent bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url("https://i0.wp.com/matanativa.com.br/wp-content/uploads/2018/09/Untitled-design-3-e1639139898660.jpg?fit=825%2C464&ssl=1")' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white z-10">
                <h1 className="text-5xl font-bold mb-4">Título Hero Chamativo</h1>
                <p className="text-xl mb-8">Um subtítulo conciso e inspirador que descreve sua proposta de valor.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
                    Saiba Mais
                </button>
            </div>
        </div>
    )
}

export default Hero