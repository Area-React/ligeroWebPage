import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LigeroLoginRouter } from "./LigeroLoginRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { renewToken } from "../components/actions/auth";
import { LigeroHomeRouter } from "./LigeroHomeRouter";
import { LigeroRegisterRoute } from "./LigeroRegisterRoute";
import { LigeroNaturalUserRouter } from "./LigeroNaturalUserRouter";
import { LigeroEmpresaUserRouter } from "./LigeroEmpresaUserRouter";
// import { useSelector } from "react-redux";
// import { renewToken } from "../components/actions/services";

export const AppRouter = () => {
  const { id } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    async function validarAuth() {
      // debugger;
      await dispatch(renewToken());
      setLoading(false);
    }
    validarAuth();
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LigeroLoginRouter />} />
          <Route path="/register" element={<LigeroRegisterRoute />} />
          <Route path="/naturaluserregister" element={<LigeroNaturalUserRouter />} />
          <Route path="/companyuserregister" element={<LigeroEmpresaUserRouter />} />
          <Route path="/" element={<LigeroHomeRouter />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
