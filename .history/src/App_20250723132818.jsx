import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Hero from './components/Hero'
import CompanyContent from './components/CompanyContent'

function App() {

  return (
    <div>
      <Navbar />  
      <main className='pt-16'>
        <Hero />
        <CompanyContent />

        {/* Outros conteúdos da sua página */}
        <section className="py-12 px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Explore Nossos Produtos</h3>
          <p className="mt-4 text-gray-600">Descubra a variedade e a qualidade das nossas castanhas de caju.</p>
          {/* Aqui você pode adicionar um link ou outro componente para produtos */}
        </section>
      </main>
      <Footer />  
    </div>
  )
}

export default App
