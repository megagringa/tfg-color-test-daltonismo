import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import img5 from "../assets/ishihara/ishihara_5.png";
import img51 from "../assets/ishihara/ishihara_5-1.png";
import img6 from "../assets/ishihara/ishihara_6.png";
import img8 from "../assets/ishihara/ishihara_8.png";
import img12 from "../assets/ishihara/ishihara_12.png";
import img29 from "../assets/ishihara/ishihara_29.png";

const plates = [
  { id: 1, image: img12, correctValue: 12 },
  { id: 2, image: img8, correctValue: 8 },
  { id: 3, image: img6, correctValue: 6 },
  { id: 4, image: img5, correctValue: 5 },
  { id: 5, image: img51, correctValue: 5 },
  { id: 6, image: img29, correctValue: 29 }
];

export default function IshiharaTest() {
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const current = plates[index];

    if (value === current.correctValue) {
      setCorrectAnswers((prev) => prev + 1);
    }

    const next = index + 1;

    if (next < plates.length) {
      setIndex(next);
    } else {
      const total = plates.length;
      const finalCorrect = value === current.correctValue
        ? correctAnswers + 1
        : correctAnswers;

      const percentage = Math.round((finalCorrect / total) * 100);

      navigate("/ishihara/result", {
        state: {
          correct: finalCorrect,
          total,
          percentage,
        },
      });
    }
  };

  const currentPlate = plates[index];

  return (
    <div style={{ textAlign: "center", padding: 20 }}>

      {/* Botón volver */}
      <div style={{ textAlign: "left" }}>
        <Link to="/">
          <button style={{ padding: "8px 15px", marginBottom: 10 }}>
            Volver
          </button>
        </Link>
      </div>

      <h2>Test de Ishihara</h2>

      <img
        src={currentPlate.image}
        alt="Placa Ishihara"
        style={{ width: 250, marginBottom: 20 }}
      />

      <h3>¿Qué número ves?</h3>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {[currentPlate.correctValue, 0, 99]
          .sort(() => Math.random() - 0.5)
          .map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              {opt}
            </button>
          ))}
      </div>

      <p style={{ marginTop: 20 }}>
        Placa {index + 1} de {plates.length}
      </p>
    </div>
  );
}
