import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { startLogout } from "../../../../../actions/auth";

import "./navbarUsuario.css";

export const NavbarUsuario = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState({
      id: null,
      correo: "",    
  });

  useEffect(() => {
    async function mostrarUsuario() {
      const url = `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/usuarios/listaNatural`;

      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "x-token": localStorage.getItem("token"),
        },
      });
      const data = await resp.json();
      // debugger;
      setUsuario(data);
      // debugger;
    }
    mostrarUsuario();
  }, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    navigate("/");
    window.location.reload();
  };

  // console.log("Usuario12::", usuario["ruta"]);

  return (
    <>
      {/* <div className="ligero-container-usuario">
        <h1>Ligero</h1>
        <div>
          <a className="menu-ligero-navbar-usu-reg" href="/">
            Inicio
          </a>
          <a className="menu-ligero-navbar-usu-reg" onClick={logout}>
            Cerrar Sesión
          </a>
        </div>
      </div> */}
      <nav className="ligero-container-navbar">
        <div className="row p-0 m-0">
          <div className="col-lg-2">
            <a className="navbar-brand-1" href="/">
              <img
                className="img-logo-ligero"
                src="../assets/Ligero-Logo-Vector.png"
                alt="Ligero"
                height="40"
              />
            </a>
          </div>

          <div className="col-lg-8 m-0 p-0">
            <div className="row p-0 m-0">
              <div className="col-lg-3 text-center align-self-center">
                <button className="btn-logo-menu d-flex">
                  <img
                    className="img-logo-home"
                    src="../assets/icons8-home-page-16.png"
                    alt="home"
                    height="25"
                  />
                  <a className="menu-navbar" href="/">
                    Home
                  </a>
                </button>
              </div>
              <div className="col-lg-3 text-center align-self-center">
                <button className="btn-logo-menu d-flex">
                  <img
                    className="img-logo-home"
                    src="../assets/icons8-queue-16.png"
                    alt="home"
                    height="25"
                  />
                  <a className="menu-navbar">Nosotros</a>
                </button>
              </div>
              <div className="col-lg-3 text-center align-self-center">
                <button className="btn-logo-menu d-flex">
                  <img
                    className="img-logo-home"
                    src="../assets/icons8-smartphone-64.png"
                    alt="home"
                    height="25"
                  />
                  <a className="menu-navbar">Servicios</a>
                </button>
              </div>
              <div className="col-lg-3 text-center align-self-center">
                <h1 className="usuario-n-1">{usuario.correo}</h1>
              </div>
            </div>
          </div>

          <div className="col-lg-2 m-0 p-0">
            <button className="btn-logo-ini-sesion d-flex">
              <img
                className="img-logo-home"
                src="../assets/icons8-logout-rounded-16.png"
                alt="home"
                height="25"
              />
              <a className="menu-navbar" onClick={logout}>
                Cerrar Sesión
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
