import React from "react";

function ColorDetector({ onBack }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reconocer Colores</h2>

      <p>Acá luego agregaremos la cámara o carga de imagen.</p>

      <button onClick={onBack}>Volver al menú</button>
    </div>
  );
}

export default ColorDetector;