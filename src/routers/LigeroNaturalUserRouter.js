import React from "react";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";
import { NaturalUserRegister } from "../components/ligero-structure/home/structure/register/naturaluserregister/NaturalUserRegister";

export const LigeroNaturalUserRouter = () => {
  return (
    <div>
      <Navbar />
      <NaturalUserRegister />
    </div>
  );
};
