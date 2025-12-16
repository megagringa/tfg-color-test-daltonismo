import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResults } from "../services/resultService";

export default function History() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getResults();
      setResults(data);
    }
    load();
  }, []);

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
          maxWidth: 450,
          background: "#f5f5f5",
          padding: 25,
          borderRadius: 12,
          fontFamily: "Arial",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0 }}>Historial de Tests</h2>

        {results.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: 20 }}>
            Aún no hay resultados guardados.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((r, index) => (
              <li
                key={index}
                style={{
                  background: "white",
                  padding: 12,
                  marginBottom: 12,
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <strong>{r.date}</strong>
                <br />
                <span style={{ fontSize: 16 }}>
                  <b>{r.percentage}%</b> ({r.correct}/{r.total})
                </span>
                <br />
                <em style={{ color: "#444" }}>{r.diagnosis}</em>
              </li>
            ))}
          </ul>
        )}

        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button
              style={{
                marginTop: 20,
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
    </div>
  );
}
