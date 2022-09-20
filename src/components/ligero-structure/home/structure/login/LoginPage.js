import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../../../actions/auth";
import { useNavigate } from "react-router";
import "./loginPage.css";

export const LoginPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formLoginValues, setFormLogin] = useState({
    correo: "",
    passwd: "",
  });

  const [passwd1, setPasswd1] = useState(false);

  const { correo, passwd } = formLoginValues;

  const iniciarSesion = async (e) => {
    debugger;
    e.preventDefault();
    console.log("Inicio Sesión");
    const resp = await dispatch(startLogin(correo, passwd));
    console.log("Reconocimiento de email");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div class="ligero-container-login">
      <form className="form-login">
        <h2>Inicia Sesión</h2>
        <p type="Correo Electrónico:">
          <input
            type="text"
            className="form-control"
            value={correo}
            onChange={(e) =>
              setFormLogin({
                ...formLoginValues,
                correo: e.target.value,
              })
            }
          />
        </p>
        <p type="Contraseña:">
          <input
            type={passwd1 ? "text" : "password"}
            className="form-control"
            value={passwd}
            onChange={(e) =>
              setFormLogin({
                ...formLoginValues,
                passwd: e.target.value,
              })
            }
          />
        </p>
        <button
          type="button"
          className="btn-ini-ses-lig"
          onClick={iniciarSesion}
        >
          Inicia Sesión
        </button>
      </form>
    </div>
  );
};
