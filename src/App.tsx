import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/statics/themes/listaTema/ListaTema";
import ListaPostagem from "./components/statics/posts/listaPostagem/ListaPostagem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/cadastrousuario" element={<CadastroUsuario />}/>
          <Route path="/temas" element={<ListaTema />}/>
          <Route path="/posts" element={<ListaPostagem />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
