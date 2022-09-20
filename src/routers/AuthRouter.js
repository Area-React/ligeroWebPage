import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/ligero-structure/home/structure/login/LoginPage";
import { RegisterPage } from "../components/ligero-structure/home/structure/register/RegisterPage";

export const AuthRouter = () => {
  return (
    <Routes>
      {/* <Route exact path="/auth/login" element={<LoginPage />} /> */}
      {/* <Route exact path="/auth/register" element={<RegisterPage/>}  />
      <Navigate to="/auth/login" /> */}
    </Routes>
  );
};
