import React from "react";
import { useSelector } from "react-redux";
import { NavbarUsuario } from "../components/ligero-structure/home/structure/navbar/navbarusuario/NavbarUsuario";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";
import { LigeroSlider } from "../components/ligero-structure/home/structure/slider/LigeroSlider";
import { NuestrosServicios } from "../components/ligero-structure/home/structure/home/nuestrosservicios/NuestrosServicios";
import LigeroInfluencers from "../components/ligero-structure/home/structure/home/ligeroinfluencers/LigeroInfluencers";
import { LigeroClientesTest } from "../components/ligero-structure/home/structure/home/ligeroClientesTest/LigeroClientesTest";
import { LigeroFooter } from "../components/ligero-structure/home/structure/home/ligerofooter/LigeroFooter";

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
            <LigeroInfluencers/>
            <LigeroClientesTest/>
            <LigeroFooter/>
          </div>
        ) : (
          <div>
            <NavbarUsuario />
            <LigeroSlider />
            <NuestrosServicios />
            <LigeroInfluencers/>
            <LigeroClientesTest/>
            <LigeroFooter/>
          </div>
        )
      ) : (
        <div>
          <Navbar />
          <LigeroSlider />
          <NuestrosServicios />
          <LigeroInfluencers/>
          <LigeroClientesTest/>
          <LigeroFooter/>
        </div>
      )}
    </div>
  );
};
