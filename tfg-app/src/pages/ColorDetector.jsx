import React, { useState, useRef } from "react";
import BackButton from "../components/BackButton";

export default function ColorDetector() {
  const [image, setImage] = useState(null);
  const [color, setColor] = useState(null);
  const imgRef = useRef(null);

  // Cargar imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setColor(null);
  };

  // Detectar color al hacer clic
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
    const rgbColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    setColor(rgbColor);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <BackButton />

      <h2>Detector de Colores desde Imagen</h2>

      <p style={{ fontSize: 14, opacity: 0.8 }}>
        Subí una imagen y luego hacé clic en la zona cuyo color quieras identificar.
      </p>

      {/* Selector de imagen */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Imagen cargada */}
      {image && (
        <div style={{ marginTop: 20 }}>
          <img
            ref={imgRef}
            src={image}
            alt="img"
            onClick={handleImageClick}
            style={{
              maxWidth: "90%",
              cursor: "crosshair",
              border: "1px solid #ccc",
              borderRadius: 10,
            }}
          />
        </div>
      )}

      {/* Resultado */}
      {color && (
        <div
          style={{
            marginTop: 20,
            padding: 10,
            display: "inline-block",
            borderRadius: 8,
            border: "1px solid #ddd",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              background: color,
              borderRadius: 8,
              margin: "0 auto 10px",
              border: "1px solid black",
            }}
          ></div>
          <p>Color detectado: <b>{color}</b></p>
        </div>
      )}
    </div>
  );
}
