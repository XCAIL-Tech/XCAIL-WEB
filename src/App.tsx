import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Solutions } from "./components/Solutions";
import AdminLogin from "./pages/AdminLogin";
import AdminContactos from "./pages/AdminContactos";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Awards />
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
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/contactos" element={<AdminContactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
