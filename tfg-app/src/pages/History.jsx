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
    <div style={{ padding: 20 }}>
      <h2>Historial de Tests</h2>

      {results.length === 0 ? (
        <p>Aún no hay resultados guardados.</p>
      ) : (
        <ul>
          {results.map((r, index) => (
            <li key={index} style={{ marginBottom: 15 }}>
              <strong>{r.date}</strong>
              <br />
              {r.percentage}% ({r.correct}/{r.total})
              <br />
              <em>{r.diagnosis}</em>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">
        <button style={{ marginTop: 20, padding: "10px 20px" }}>
          Volver al menú
        </button>
      </Link>
    </div>
  );
}