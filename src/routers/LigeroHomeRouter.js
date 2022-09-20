import React from "react";
import { useSelector } from "react-redux";
import { LoginPage } from "../components/ligero-structure/home/structure/login/LoginPage";
import { RegisterPage } from "../components/ligero-structure/home/structure/register/RegisterPage";
import { NavbarUsuario } from "../components/ligero-structure/home/structure/navbar/navbarusuario/NavbarUsuario";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";

export const LigeroHomeRouter = () => {
  const { id_rol } = useSelector((state) => state.auth);
  console.log("este es el rol:", id_rol);

  return (
    <div>
      {localStorage.getItem("token") ? (
        id_rol != 3 ? (
          <NavbarUsuario />
        ) : (
          <NavbarUsuario />
        )
      ) : (
        <Navbar/>
      )}
    </div>
  );
};
