import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LigeroLoginRouter } from "./LigeroLoginRouter";
import { LigeroHomeRouter } from "./LigeroHomeRouter";
import { LigeroRegisterRoute } from "./LigeroRegisterRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<LigeroRegisterRoute />} />
          <Route path="/login" element={<LigeroLoginRouter />} />
          <Route path="/home" element={<LigeroHomeRouter />} />
          <Route path="/" element={<Navigate to ="/login" />}/>
        </Routes>
      </div>
    </Router>
  );
};
