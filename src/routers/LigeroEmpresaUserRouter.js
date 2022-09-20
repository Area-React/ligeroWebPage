import React from "react";
import { Navbar } from "../components/ligero-structure/home/structure/navbar/Navbar";
import { CompanyUserRegister } from "../components/ligero-structure/home/structure/register/companyuserregister/CompanyUserRegister";

export const LigeroEmpresaUserRouter = () => {
  return (
    <div>
      <Navbar />
      <CompanyUserRegister/>
    </div>
  );
};
