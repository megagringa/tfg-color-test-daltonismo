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
      const finalCorrect =
        value === current.correctValue
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
          boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        {/* Botón volver */}
        <div style={{ textAlign: "left" }}>
          <Link to="/">
            <button
              style={{
                padding: "8px 15px",
                background: "#333",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                marginBottom: 15,
              }}
            >
              Volver
            </button>
          </Link>
        </div>

        <h2 style={{ marginTop: 0 }}>Test de Ishihara</h2>

        {/* Imagen */}
        <img
          src={currentPlate.image}
          alt="Placa Ishihara"
          style={{
            width: 260,
            borderRadius: 10,
            border: "2px solid #ddd",
            marginTop: 10,
          }}
        />

        <h3 style={{ marginTop: 20 }}>¿Qué número ves?</h3>

        {/* Opciones */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 15,
            marginTop: 15,
          }}
        >
          {[currentPlate.correctValue, 0, 99]
            .sort(() => Math.random() - 0.5)
            .map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                style={{
                  padding: "12px 20px",
                  background: "#e0e0e0",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 16,
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "#d0d0d0")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "#e0e0e0")
                }
              >
                {opt}
              </button>
            ))}
        </div>

        <p style={{ marginTop: 20, opacity: 0.7 }}>
          Placa {index + 1} de {plates.length}
        </p>
      </div>
    </div>
  );
}
