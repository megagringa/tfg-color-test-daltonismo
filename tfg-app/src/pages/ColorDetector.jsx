import React, { useState, useRef } from "react";
import BackButton from "../components/BackButton";

export default function ColorDetector() {
  const [image, setImage] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [colorRgb, setColorRgb] = useState(null);
  const imgRef = useRef(null);

  // --- Colores CSS traducidos al español ---
  const cssColors = {
    "Negro": [0, 0, 0],
    "Blanco": [255, 255, 255],
    "Rojo": [255, 0, 0],
    "Lima": [0, 255, 0],
    "Azul": [0, 0, 255],
    "Amarillo": [255, 255, 0],
    "Cian": [0, 255, 255],
    "Magenta": [255, 0, 255],
    "Plateado": [192, 192, 192],
    "Gris": [128, 128, 128],
    "Bordó": [128, 0, 0],
    "Verde Oliva": [128, 128, 0],
    "Verde": [0, 128, 0],
    "Púrpura": [128, 0, 128],
    "Verde Azulado": [0, 128, 128],
    "Azul Marino": [0, 0, 128],
    "Naranja": [255, 165, 0],
    "Rosa": [255, 192, 203],
    "Marrón": [165, 42, 42],
    "Chocolate": [210, 105, 30],
    "Tomate": [255, 99, 71],
    "Coral": [255, 127, 80],
    "Salmón": [250, 128, 114],
    "Caqui": [240, 230, 140],
    "Dorado": [255, 215, 0],
    "Violeta": [238, 130, 238],
    "Índigo": [75, 0, 130],
    "Turquesa": [64, 224, 208],
    "Celeste": [135, 206, 235],
    "Celeste Intenso": [0, 191, 255],
    "Azul Real": [65, 105, 225],
    "Gris Claro": [211, 211, 211],
    "Gris Oscuro": [169, 169, 169],
    "Carmesí": [220, 20, 60],
    "Rojo Ladrillo": [178, 34, 34],
    "Verde Bosque": [34, 139, 34]
  };

  // --- Buscar el color más cercano ---
  const getClosestColorName = (r, g, b) => {
    let minDistance = Infinity;
    let closestColor = "Color desconocido";

    Object.entries(cssColors).forEach(([name, rgb]) => {
      const distance =
        Math.pow(rgb[0] - r, 2) +
        Math.pow(rgb[1] - g, 2) +
        Math.pow(rgb[2] - b, 2);

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = name;
      }
    });

    return closestColor;
  };

  // --- Cargar una imagen ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setColorName(null);
    setColorRgb(null);
  };

  // --- Detectar color en clic ---
  const handleImageClick = (e) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imgRef.current.width;
    canvas.height = imgRef.current.height;

    ctx.drawImage(imgRef.current, 0, 0);

    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    const rgbString = `rgb(${r}, ${g}, ${b})`;
    const name = getClosestColorName(r, g, b);

    setColorRgb(rgbString);
    setColorName(name);
  };

  return (
    <div
      style={{
        padding: 20,
        minHeight: "100vh",
        background: "#1c1c1c", // FONDO OSCURO
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* Tarjeta clara */}
      <div
        style={{
          width: "100%",
          maxWidth: 500,
          background: "#f5f5f5",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          textAlign: "center",
        }}
      >
        <BackButton />

        <h2>Detector de Colores desde Imagen</h2>

        <p style={{ fontSize: 14, opacity: 0.8 }}>
          Subí una imagen y luego hacé clic en la zona cuyo color quieras identificar.
        </p>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {image && (
          <div style={{ marginTop: 20 }}>
            <img
              ref={imgRef}
              src={image}
              alt="Seleccionada"
              onClick={handleImageClick}
              style={{
                maxWidth: "300px",
                cursor: "crosshair",
                border: "1px solid #ccc",
                borderRadius: 10,
              }}
            />
          </div>
        )}

        {colorName && (
          <div
            style={{
              marginTop: 20,
              padding: 10,
              display: "inline-block",
              borderRadius: 8,
              border: "1px solid #ddd",
              minWidth: 150,
              background: "#ffffff",
            }}
          >
            {colorRgb && (
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: colorRgb,
                  borderRadius: 8,
                  margin: "0 auto 10px",
                  border: "1px solid black",
                }}
              ></div>
            )}

            <p><b>{colorName}</b></p>
            <p style={{ fontSize: 12, opacity: 0.7 }}>{colorRgb}</p>
          </div>
        )}
      </div>
    </div>
  );
}
