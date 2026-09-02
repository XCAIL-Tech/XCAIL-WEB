import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import AdminContactos from "./pages/AdminContactos";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import Faq from "./pages/Faq";
import "./App.css";

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Pricing />
      <Awards />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas independientes — deben ir antes del catch-all */}
        <Route path="/privacidad"        element={<Privacidad />} />
        <Route path="/terminos"          element={<Terminos />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="/admin/login"       element={<AdminLogin />} />
        <Route path="/admin/contactos"   element={<AdminContactos />} />
        {/* Landing — catch-all: /, /products, /about, /contact, etc. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
