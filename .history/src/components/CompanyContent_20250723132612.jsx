import React from 'react';

const CompanyContent = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Sobre a Greenlife Cashew Exports Ltda</h2>

                <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                    {/* Imagem ou Ícone (Opcional) */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        {/* Você pode adicionar uma imagem relevante aqui, como uma plantação de caju, o processo de beneficiamento, ou o logo da empresa */}
                        <img
                            src="../assets/home.jpg" // Substitua pela URL da sua imagem
                            alt="Processo de Beneficiamento de Castanhas"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>

                    {/* Conteúdo da Empresa */}
                    <div className="lg:w-1/2 text-gray-700">
                        <p className="text-lg leading-relaxed mb-6">
                            A **Greenlife Cashew Exports Ltda** é uma empresa dedicada ao beneficiamento e exportação de castanhas de caju de alta qualidade. Fundada em **2020**, nossa jornada começou com o compromisso de trazer o melhor do caju para o mercado global, valorizando a produção local e garantindo um produto final de excelência.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Desde a nossa fundação, temos focado em processos de beneficiamento inovadores e sustentáveis, garantindo que cada castanha de caju que exportamos atenda aos mais rigorosos padrões internacionais. Nosso objetivo é ser um elo confiável entre os produtores e os consumidores ao redor do mundo, promovendo a riqueza do caju brasileiro.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Nossa paixão pela qualidade e nosso respeito pela origem nos impulsionam a crescer, sempre com a visão de fortalecer a cadeia produtiva do caju e levar um sabor autêntico e saudável para mesas em todo o planeta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyContent;