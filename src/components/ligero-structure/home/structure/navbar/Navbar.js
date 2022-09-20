import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="ligero-container-navbar">
        <h1>Ligero</h1>
        <div>
          <a className="menu-navbar" href="/">Inicio</a>
          <a className="menu-navbar" href="/register">Regístrate</a>
          <a className="menu-navbar" href="/login">Iniciar Sesión</a>
        </div>
      </div>
    </>
  );
};
