import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import CadastroPost from "./components/posts/cadastroPost/CadastroPost";
import DeletarPostagem from "./components/posts/deletarPostagem/DeletarPostagem";
import CadastroTema from "./components/themes/cadastroTema/CadastroTema";
import DeletarTema from "./components/themes/deletarTema/DeletarTema";
import ListaPostagem from "./components/posts/listaPostagem/ListaPostagem";
import ListaTema from "./components/themes/listaTema/ListaTema";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formPost" element={<CadastroPost />} />
            <Route path="/formPost/:id" element={<CadastroPost />} />
            <Route path="/formTheme" element={<CadastroTema />} />
            <Route path="/formTheme/:id" element={<CadastroTema />} />
            <Route path="/deletePost/:id" element={<DeletarPostagem />} />
            <Route path="/deleteTheme/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
