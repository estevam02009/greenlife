import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />  
      <main className='pt-16'>
        <h1 className="text-3xl font-bold text-center mt-8">Bem-vindo ao meu site!</h1>
        {/* Mais conteúdo da sua página */}
        <p className="p-8">Este é um exemplo de conteúdo da sua página. Role para baixo para ver a navbar fixa em ação!</p>
        <p className="p-8">Este é um exemplo de conteúdo da sua página. Role para baixo para ver a navbar fixa em ação!</p>
        <p className="p-8">Este é um exemplo de conteúdo da sua página. Role para baixo para ver a navbar fixa em ação!</p>
      </main>
      <Footer />  
    </div>
  )
}

export default App
