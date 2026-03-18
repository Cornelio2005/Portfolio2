import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Projets from './pages/Projets'
import Contact from './pages/Contact'
import CV from './pages/CV'
import ProjetDetail from './pages/ProjetDetail'

function App() {
  return (
    <div>
      <Navbar />
      <main>
  <Routes>
    <Route path="/" element={
      <>
        <Accueil />
        <APropos />
        <Projets />
        <Contact />
      </>
    } />
    <Route path="/cv" element={<CV />} />
    <Route path="/projets/:id" element={<ProjetDetail />} />
  </Routes>
</main>
      <Footer />
    </div>
  )
}
export default App