import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import AdsterraSocialBar from './components/common/AdsterraSocialBar'
import AdsterraNativeBanner from './components/common/AdsterraNativeBanner'

function App() {
  return (
    <>
      <Header />
      <AdsterraSocialBar />
      <AdsterraNativeBanner />
      <Outlet />
      <footer className="text-center py-6 text-gray-400 bg-transparent">
  © 2025 CatiyoChan |
  <a href="/privacy-policy" className="text-blue-400 ml-2 ">
    Privacy Policy
  </a>{" "}
  |
  <a href="/terms-and-conditions" className="text-blue-400 ml-2 ">
    Terms & Conditions
  </a>
</footer>
    </>
  )
}

export default App
