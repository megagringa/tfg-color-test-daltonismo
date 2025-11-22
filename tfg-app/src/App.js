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

function Menu() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TFG – Daltonismo</h1>

      <div style={styles.menu}>
        <Link to="/colores">
          <button style={styles.button}>Ver Colores (Imagen)</button>
        </Link>

        <Link to="/camera">
          <button style={styles.button}>Ver Colores (Cámara)</button>
        </Link>

        <Link to="/ishihara">
          <button style={styles.button}>Test de Ishihara</button>
        </Link>

        <Link to="/historial">
          <button style={styles.button}>Historial de Tests</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f4f4",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: 20,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  button: {
    padding: "12px 20px",
    fontSize: 16,
    cursor: "pointer",
  },
};

export default App;
