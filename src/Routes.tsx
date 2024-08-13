import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import LogIn from "./pages/LogIn";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Cadastro from "./pages/Cadastro";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LogIn />} />
			<Route path="/inicio" element={<Home />} />
			<Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
			<Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
};

export default AppRoutes;