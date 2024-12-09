import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GestorHome from "./components/GestorHome";
import UsuarioHome from "./components/UsuarioHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/gestorHome" element={<GestorHome/>}></Route>
        <Route path="/usuarioHome" element={<UsuarioHome/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
