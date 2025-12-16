import React from "react";

function TestIshihara({ onBack }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Test de Ishihara</h2>

      <p>Más adelante agregamos las placas y las opciones.</p>

      <button onClick={onBack}>Volver al menú</button>
    </div>
  );
}

export default TestIshihara;