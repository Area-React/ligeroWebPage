import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
import { postPersonaNatural } from "../../../../actions/services";
import "./registerPage.css";

export const RegisterPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [personaNatural, setPersonaNatural] = useState({
    id: null,
    nomNat: "",
    tipDoc: "",
    docNat: "",
    correo: "",
    telNat: "",
    ciuNat: "",
    passwd: "",
  });

  const enviarPersonaNatural = async (e) => {
    e.preventDefault();

    // if (personaNatural.tyc !== true) {
    //   return Swal.fire(
    //     "Error",
    //     "Debe aceptar los términos y condiciones",
    //     "error"
    //   );
    // }

    // console.log(personaNatural);
    // debugger;
    const resp = await dispatch(
      postPersonaNatural(
        personaNatural.nomNat,
        personaNatural.tipDoc,
        personaNatural.docNat,
        personaNatural.correo,
        personaNatural.telNat,
        personaNatural.ciuNat,
        personaNatural.passwd
      )
    );

    // debugger;
    if (resp != null) {
      navigate("/");
    }
  };

  console.log("Persona Natural : ", personaNatural);

  return (
    <div className="ligero-container">
      <form className="form">
        <h2>Registrate</h2>
        <p type="Nombre:">
          <input
            type="text"
            name="nombre-completo"
            autoComplete="nombre-completo"
            className="form-control"
            value={personaNatural.nomNat}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                nomNat: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Tipo de documento:">
          <input
            type="text"
            name="tipo_doc"
            autoComplete="tipo_doc"
            className="form-control"
            value={personaNatural.tipDoc}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                tipDoc: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Documento:">
          <input
            type="text"
            name="doc_nat"
            autoComplete="doc_nat"
            className="form-control"
            value={personaNatural.docNat}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                docNat: e.target.value,
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
            value={personaNatural.correo}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                correo: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Telefono:">
          <input
            type="text"
            name="tel_nat"
            autoComplete="tel_nat"
            className="form-control"
            value={personaNatural.telNat}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                telNat: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Ciudad:">
          <input
            type="text"
            name="ciu_nat"
            autoComplete="ciu_nat"
            className="form-control"
            value={personaNatural.ciuNat}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                ciuNat: e.target.value,
              })
            }
            required
          />
        </p>
        <p type="Contraseña:">
          <input
            type="text"
            name="passwd"
            autoComplete="passwd"
            className="form-control"
            value={personaNatural.passwd}
            onChange={(e) =>
              setPersonaNatural({
                ...personaNatural,
                passwd: e.target.value,
              })
            }
            required
          />
        </p>
        <button type="submit" onClick={enviarPersonaNatural}>
          Registrate
        </button>
      </form>
    </div>
  );
};
