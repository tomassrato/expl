import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import UnidadesCurriculares from "./pages/UnidadesCurriculares.jsx";
import AM2 from "./pages/AM2.jsx";
import Ferramentas from "./pages/Ferramentas.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/unidadescurriculares"
          element={
            <ProtectedRoute>
              <UnidadesCurriculares />
            </ProtectedRoute>
          }
        />

        <Route
          path="/unidadescurriculares/am2"
          element={
            <ProtectedRoute>
              <AM2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ferramentas"
          element={
            <ProtectedRoute>
              <Ferramentas />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
