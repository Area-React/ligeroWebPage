import React from "react";
import { useNavigate } from "react-router";
import "./registerPage.css";

export const RegisterPage = () => {
  let navigate = useNavigate();

  const naturalUserRegist = () => {
    navigate("/naturaluserregister");
  };

  const companyUserRegist = () => {
    navigate("/companyuserregister");
  };

  return (
    <>
      <div className="container-form-contacto">
        <div className="ligero-container">
          <div className="row m-0 p-0">
            <div className="col-md-12 col-lg-6">
              <div className="ligero-text-reg">
                <h3 className="ligero-text-tittle">¿Quieres que</h3>
                <h3 className="ligero-text-tittle">comencemos?</h3>

                <p className="ligero-text-tittle">
                  Para registrarte debes seleccionar tu perfil.
                </p>
              </div>

              <div className="ligero-contn">
                <div className="col-sm-6 col-xs-12 m-0 p-0">
                  <div className="ligero-btn-con">
                    <button
                      type="submit"
                      className="ligero-btn-reg"
                      onClick={naturalUserRegist}
                    >
                      Usuario
                    </button>
                  </div>
                </div>

                <div className="col-sm-6 col-xs-12 m-0 p-0">
                  <div className="ligero-btn-con-emp">
                    <button
                      type="submit"
                      className="ligero-btn-reg-emp"
                      onClick={companyUserRegist}
                    >
                      Empresa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
