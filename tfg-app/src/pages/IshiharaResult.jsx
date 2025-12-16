import { Link, useLocation } from "react-router-dom";
import { saveResult } from "../services/resultService";

export default function IshiharaResult() {
  const { state } = useLocation();

  if (!state)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#1c1c1c",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <h2>Error: no hay resultados.</h2>
      </div>
    );

  const { correct, total, percentage, diagnosis } = state;

  // Guardar resultado
  saveResult({
    date: new Date().toLocaleString(),
    correct,
    total,
    percentage,
    diagnosis,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1c1c1c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#f5f5f5",
          padding: 25,
          borderRadius: 12,
          fontFamily: "Arial",
          textAlign: "center",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Resultados del Test</h2>

        <p style={{ fontSize: 18, marginTop: 10 }}>
          Respuestas correctas: <b>{correct}</b> de <b>{total}</b>
        </p>

        <h2
          style={{
            marginTop: 20,
            fontSize: 32,
            color: percentage >= 80 ? "green" : percentage >= 50 ? "#c79a00" : "red",
          }}
        >
          {percentage}%
        </h2>

        <h3 style={{ marginTop: 15 }}>{diagnosis}</h3>

        <Link to="/">
          <button
            style={{
              marginTop: 25,
              padding: "10px 22px",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#444")}
            onMouseLeave={(e) => (e.target.style.background = "#333")}
          >
            Volver al menú
          </button>
        </Link>
      </div>
    </div>
  );
}
