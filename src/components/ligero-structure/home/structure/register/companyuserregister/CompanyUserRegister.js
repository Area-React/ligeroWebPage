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
    <div className="container-form-ligero">
      <div className="ligero-container-empresa">
        <div className="row">
          <div className="col-md-12 m-0 p-0">
            <div className="text-reg-lig-emp">
              <h3 className="tit-text-reg-lig-emp">Registrate</h3>
              <p className="tit-text-reg-lig-emp">Usuario Empresa</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="ligero-cont-pad-emp">
            <div className="ligero-formul-con-emp row">
              <div className="col-md-12">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">Empresa</label>
                  <input
                    type="text"
                    name="nombre-empresa"
                    autoComplete="nombre-empresa"
                    className="input-ligero-emp form-control"
                    value={empresa.empUsu}
                    onChange={(e) =>
                      setEmpresa({
                        ...empresa,
                        empUsu: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="ligero-formul-con-emp-1 row">
              <div className="col-md-6">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">NIT</label>
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
                </div>
              </div>

              <div className="col-md-6">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">
                    Nombre Contacto
                  </label>
                  <p type="Documento:">
                    <input
                      type="text"
                      name="nom_con"
                      autoComplete="nom_con"
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
                </div>
              </div>
            </div>

            <div className="ligero-formul-con-emp-2 row">
              <div className="col-md-12">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">Correo</label>
                  <input
                    type="text"
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
                </div>
              </div>
            </div>

            <div className="ligero-formul-con-emp-3 row">
              <div className="col-md-4">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    autoComplete="direccion"
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
                </div>
              </div>

              <div className="col-md-4">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    autoComplete="ciudad"
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
                </div>
              </div>

              <div className="col-md-4">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    autoComplete="telefono"
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
                </div>
              </div>
            </div>

            <div className="ligero-formul-con-emp-4 row">
              <div className="col-md-12">
                <div className="ligero-form-cont-emp">
                  <label className="ligero-texto-nom-cont-emp">
                    Contraseña
                  </label>
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
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <button
              type="submit"
              className="btn-reg-ligero-emp"
              onClick={enviarEmpresa}
            >
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
