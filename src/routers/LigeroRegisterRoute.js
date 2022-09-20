import React from "react";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";
import { RegisterPage } from "../components/ligero-structure/home/structure/register/RegisterPage";

export const LigeroRegisterRoute = () => {
  return (
    <div>
      <Navbar />
      <RegisterPage />
    </div>
  );
};
