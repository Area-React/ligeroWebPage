import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postPersonaNatural } from "../../../../../actions/services";
// import Swal from "sweetalert2";
import "./naturalUserRegister.css";

export const NaturalUserRegister = () => {
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
    <>
      <div className="container-form-ligero">
        <div className="ligero-container-natural">
          <div className="row">
            <div className="col-md-12 m-0 p-0">
              <div className="text-reg-lig">
                <h3 className="tit-text-reg-lig">Registrate</h3>
                <p className="tit-text-reg-lig">Usuario Natural</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="ligero-cont-pad">
              <div className="ligero-formul-con row">
                <div className="col-md-12">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Nombre</label>
                    <input
                      type="text"
                      name="nombre-completo"
                      autoComplete="nombre-completo"
                      className="input-ligero form-control"
                      value={personaNatural.nomNat}
                      onChange={(e) =>
                        setPersonaNatural({
                          ...personaNatural,
                          nomNat: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="ligero-formul-con-1 row">
                <div className="col-md-6">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">
                      Tipo de documento
                    </label>
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
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Documento</label>
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
                  </div>
                </div>
              </div>

              <div className="ligero-formul-con-2 row">
                <div className="col-md-12">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Correo</label>
                    <input
                      type="text"
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
                  </div>
                </div>
              </div>

              <div className="ligero-formul-con-3 row">
                <div className="col-md-6">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Teléfono</label>
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
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Ciudad</label>
                    <p type="Documento:">
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
                  </div>
                </div>
              </div>

              <div className="ligero-formul-con-4 row">
                <div className="col-md-12">
                  <div className="ligero-form-cont">
                    <label className="ligero-texto-nom-cont">Contraseña</label>
                    <input
                      type="password"
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
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <button
                type="submit"
                className="btn-reg-ligero"
                onClick={enviarPersonaNatural}
              >
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
