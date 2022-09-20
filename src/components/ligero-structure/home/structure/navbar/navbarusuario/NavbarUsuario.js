import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { startLogout } from "../../../../../actions/auth";

import "./navbarUsuario.css";

export const NavbarUsuario = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="ligero-container-usuario">
        <h1>Ligero</h1>
        <div>
          <a className="menu-ligero-navbar-usu-reg" href="/">
            Inicio
          </a>
          <a className="menu-ligero-navbar-usu-reg" onClick={logout}>
            Cerrar Sesión
          </a>
        </div>
      </div>
    </>
  );
};
