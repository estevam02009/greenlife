import React from "react"

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(assets/hero-bg.webp)' }}>
            <h1 className="text-3xl font-bold text-center mt-8">Bem-vindo ao meu site!</h1>
            <p className="text-center mt-4">Aqui você encontrará informações sobre mim, meus serviços e meus projetos.</p>
        </div>
    )
}   

export default Hero