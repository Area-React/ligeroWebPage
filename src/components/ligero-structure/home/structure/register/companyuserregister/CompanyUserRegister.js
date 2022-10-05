import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postEmpresa } from "../../../../../actions/services";
import "./companyUserRegister.css";

export const CompanyUserRegister = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [empresa, setEmpresa] = useState({
    id: null,
    empUsu: "",
    nitEmp: "",
    nomCon: "",
    correo: "",
    dirEmp: "",
    ciuEmp: "",
    telEmp: "",
    passwd: "",
  });

  const enviarEmpresa = async (e) => {
    e.preventDefault();

    const resp = await dispatch(
      postEmpresa(
        empresa.empUsu,
        empresa.nitEmp,
        empresa.nomCon,
        empresa.correo,
        empresa.dirEmp,
        empresa.ciuEmp,
        empresa.telEmp,
        empresa.passwd
      )
    );

    // debugger;
    if (resp != null) {
      navigate("/");
    }
  };

  return (
    <div className="ligero-container-empresa">
      <form className="form">
        <h2>Registrate</h2>
        <p>Empresa</p>
        <p type="Empresa:">
          <input
            type="text"
            name="nombre-empresa"
            autoComplete="nombre-empresa"
            className="form-control"
            value={empresa.empUsu}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                empUsu: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="NIT:">
          <input
            type="text"
            name="nit"
            autoComplete="nit"
            className="form-control"
            value={empresa.nitEmp}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                nitEmp: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Nombre de contacto:">
          <input
            type="text"
            name="nom_cont"
            autoComplete="nom_cont"
            className="form-control"
            value={empresa.nomCon}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                nomCon: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Correo:">
          <input
            type="email"
            name="correo"
            autoComplete="correo"
            className="form-control"
            value={empresa.correo}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                correo: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Dirección:">
          <input
            type="text"
            name="dir_empr"
            autoComplete="dir_empr"
            className="form-control"
            value={empresa.dirEmp}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                dirEmp: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Ciudad:">
          <input
            type="text"
            name="ciu_emp"
            autoComplete="ciu_emp"
            className="form-control"
            value={empresa.ciuEmp}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                ciuEmp: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Telefono:">
          <input
            type="text"
            name="tel_empr"
            autoComplete="tel_empr"
            className="form-control"
            value={empresa.telEmp}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                telEmp: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Contraseña:">
          <input
            type="password"
            name="passwd"
            autoComplete="passwd"
            className="form-control"
            value={empresa.passwd}
            onChange={(e) =>
              setEmpresa({
                ...empresa,
                passwd: e.target.value,
              })
            }
            required
          />
        </p>
        <button type="submit" onClick={enviarEmpresa}>
          Registrate
        </button>
      </form>
    </div>
  );
};
