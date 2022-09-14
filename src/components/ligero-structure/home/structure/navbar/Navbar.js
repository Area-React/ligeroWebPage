import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="ligero-container-navbar">
        <h1>Ligero</h1>
        <div>
          <a href="/home">Inicio</a>
          <a href="/register">Regístrate</a>
          <a href="/">Iniciar Sesión</a>
        </div>
      </div>
    </>
  );
};
