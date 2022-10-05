import React from "react";
import { useSelector } from "react-redux";
import { NavbarUsuario } from "../components/ligero-structure/home/structure/navbar/navbarusuario/NavbarUsuario";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";
import { LigeroSlider } from "../components/ligero-structure/home/structure/slider/LigeroSlider";
import { NuestrosServicios } from "../components/ligero-structure/home/structure/home/nuestrosservicios/NuestrosServicios";

export const LigeroHomeRouter = () => {
  const { id_rol } = useSelector((state) => state.auth);
  console.log("este es el rol:", id_rol);

  return (
    <div>
      {localStorage.getItem("token") ? (
        id_rol != 3 ? (
          <div>
            <NavbarUsuario />
            <LigeroSlider />
            <NuestrosServicios />
          </div>
        ) : (
          <div>
            <NavbarUsuario />
            <LigeroSlider />
            <NuestrosServicios />
          </div>
        )
      ) : (
        <div>
          <Navbar />
          <LigeroSlider />
          <NuestrosServicios />
        </div>
      )}
    </div>
  );
};
