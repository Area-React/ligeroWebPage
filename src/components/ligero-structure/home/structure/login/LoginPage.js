import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { startLogin } from "../../../../actions/services";
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

  const iniciarSesion = (e) => {
    navigate("/home");
    e.preventDefault();
    console.log("Inicio Sesión");
    // debugger;
    dispatch(startLogin(correo, passwd));
    console.log("Reconocimiento de email");
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
        <button type="button" onClick={iniciarSesion}>
          Inicia Sesión
        </button>
      </form>
    </div>
  );
};
