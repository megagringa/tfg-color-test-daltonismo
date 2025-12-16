import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // Valores recibidos desde IshiharaTest
  const { correct, total } = location.state || { correct: 0, total: 0 };

  const percentage = Math.round((correct / total) * 100);

  const interpretMessage = () => {
    if (percentage === 100) return "No se detectan indicios de daltonismo.";
    if (percentage >= 60) return "Posibles dificultades leves en la percepción del color.";
    return "El resultado sugiere indicios de daltonismo. Se recomienda realizar un diagnóstico profesional.";
  };

  return (
    <div style={styles.container}>
      <h1>Resultado del Test</h1>

      <div style={styles.card}>
        <h2>{correct} / {total} respuestas correctas</h2>
        <h3>{percentage}%</h3>

        <p style={styles.message}>{interpretMessage()}</p>

        <button style={styles.button} onClick={() => navigate("/")}>
          Volver al menú principal
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
  },
  card: {
    margin: "20px auto",
    padding: 20,
    maxWidth: 350,
    borderRadius: 10,
    border: "2px solid #ddd",
    background: "#fafafa",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer",
  },
};
