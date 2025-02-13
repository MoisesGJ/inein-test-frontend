import './App.css';

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<h1>Página no encontrada...</h1>} />
    </Routes>
  );
}

export default App;
