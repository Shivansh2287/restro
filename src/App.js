import './App.css'
import NavbarX from './components/Navbar.component'
import LogoFlex from './components/LogoFlex'
import Lists from './components/Lists'
import Orders from './components/Orders'
import About from './components/About'
import AdminPanel from './components/AdminPanel'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <LogoFlex />
      <Lists />
      <Orders />
      <About />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavbarX />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </ChakraProvider>
    </div>
  )
}

export default App
