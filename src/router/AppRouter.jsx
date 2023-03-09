import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Services from "../pages/Services"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
