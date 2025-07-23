import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />  
      <main className='pt-16'>
        <h1 className="text-3xl font-bold text-center mt-8">Bem-vindo ao meu site!</h1>
        
      </main>
      <Footer />  
    </div>
  )
}

export default App
