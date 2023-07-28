import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Employees from './components/Main/Employees/Employees'

function App() {
 

  
  return (
    <>
      <Header />

      <main className='Main-page' >
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/computers" element={<section>computers</section>} />
          <Route path="/accesories" element={<section>accesories</section>} />
          <Route path="/aboutme" element={<section>about me</section>} />
        </Routes>
      </main>
      
      <Footer/>

    </>
  )
}

export default App
