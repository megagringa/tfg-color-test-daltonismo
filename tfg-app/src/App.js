import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ColorDetector from "./pages/ColorDetector";
import ColorCamera from "./pages/ColorCamera";
import IshiharaTest from "./pages/IshiharaTest";
import IshiharaResult from "./pages/IshiharaResult";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />

        <Route path="/colores" element={<ColorDetector />} />

        <Route path="/camera" element={<ColorCamera />} />

        <Route path="/ishihara" element={<IshiharaTest />} />

        <Route path="/ishihara/result" element={<IshiharaResult />} />

        <Route path="/historial" element={<History />} />
      </Routes>
    </Router>
  );
}

// ----------------------
// COMPONENTE DEL MENÚ
// ----------------------

function Menu() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1c1c1c", // Fondo oscuro
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      {/* Tarjeta clara central */}
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#f5f5f5",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 25 }}>TFG – Daltonismo</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Link to="/colores">
            <button style={buttonStyle}>Ver Colores (Imagen)</button>
          </Link>

          <Link to="/camera">
            <button style={buttonStyle}>Ver Colores (Cámara)</button>
          </Link>

          <Link to="/ishihara">
            <button style={buttonStyle}>Test de Ishihara</button>
          </Link>

          <Link to="/historial">
            <button style={buttonStyle}>Historial de Tests</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ----------------------
// ESTILOS
// ----------------------

const buttonStyle = {
  width: "100%",
  padding: "12px 20px",
  fontSize: 16,
  cursor: "pointer",
  borderRadius: 8,
  background: "#ffffff",
  border: "1px solid #ccc",
  transition: "0.2s",
};

export default App;
