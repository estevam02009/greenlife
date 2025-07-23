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
      </main>
      <Footer />  
    </div>
  )
}

export default App
