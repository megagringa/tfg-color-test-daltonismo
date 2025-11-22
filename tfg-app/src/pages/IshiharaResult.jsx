import { Link, useLocation } from "react-router-dom";
import { saveResult } from "../services/resultService";

export default function IshiharaResult() {
  const { state } = useLocation();

  if (!state) return <h2>Error: no hay resultados.</h2>;

  const { correct, total, percentage, diagnosis } = state;

  // Guardar en backend
  saveResult({
    date: new Date().toLocaleString(),
    correct,
    total,
    percentage,
    diagnosis,
  });

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Resultados del Test</h2>

      <p>
        Respuestas correctas: {correct} de {total}
      </p>

      <h3>{percentage}% de aciertos</h3>

      <h3 style={{ marginTop: 20 }}>{diagnosis}</h3>

      <Link to="/">
        <button style={{ marginTop: 20, padding: "10px 20px" }}>
          Volver al menú
        </button>
      </Link>
    </div>
  );
}
