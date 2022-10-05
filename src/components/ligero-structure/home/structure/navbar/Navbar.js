import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export const Navbar = () => {
  const [ocultar, setOcultar] = useState(true);

  return (
    <>
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
                <button className="btn-logo-menu d-flex">
                  <img
                    className="img-logo-home"
                    src="../assets/icons8-pencil-16.png"
                    alt="home"
                    height="25"
                  />
                  <a className="menu-navbar" href="/register">
                    Regístrate
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-2 m-0 p-0">
            <button className="btn-logo-ini-sesion d-flex">
              <img
                className="img-logo-home"
                src="../assets/icons8-login-16.png"
                alt="home"
                height="25"
              />
              <a className="menu-navbar" href="/login">
                Inicio Sesión
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
