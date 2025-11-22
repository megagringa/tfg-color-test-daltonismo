import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        marginBottom: 20,
        padding: "10px 16px",
        fontSize: 14,
        cursor: "pointer",
        borderRadius: 6,
      }}
    >
      ← Volver
    </button>
  );
}
