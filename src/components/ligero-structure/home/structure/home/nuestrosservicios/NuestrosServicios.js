import React from "react";
import "./nuestrosServicios.css";

export const NuestrosServicios = () => {
  return (
    <>
      <div className="ligero-nuestro">
        <div className="row m-0 p-0">
          <div className="text-servicios d-flex col-md-12">
            <div className="ligero-round" />
            <h3 className="ligero-our-services">Nuestros Servicios</h3>
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="ligero-servicio-net d-flex">
            <div className="col-md-3">
              <div className="ligero-card-facebook">
                <img
                  className="img-logo-facebook"
                  src="../assets/facebook.png"
                  alt="facebook"
                  height="100"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ligero-card-twitter">
                <img
                  className="img-logo-twitter"
                  src="../assets/twitter.png"
                  alt="twitter"
                  height="100"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ligero-card-instagram">
                <img
                  className="img-logo-instagram"
                  src="../assets/instagram.png"
                  alt="instagram"
                  height="100"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ligero-card-tiktok">
                <img
                  className="img-logo-tiktok"
                  src="../assets/tiktok.png"
                  alt="tiktok"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
