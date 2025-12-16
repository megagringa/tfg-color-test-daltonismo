import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";

function getColorName(r, g, b) {
  const colors = [
    { name: "Rojo", r: 255, g: 0, b: 0 },
    { name: "Verde", r: 0, g: 255, b: 0 },
    { name: "Azul", r: 0, g: 0, b: 255 },
    { name: "Amarillo", r: 255, g: 255, b: 0 },
    { name: "Cian", r: 0, g: 255, b: 255 },
    { name: "Magenta", r: 255, g: 0, b: 255 },
    { name: "Blanco", r: 255, g: 255, b: 255 },
    { name: "Negro", r: 0, g: 0, b: 0 },
    { name: "Gris", r: 128, g: 128, b: 128 },
    { name: "Naranja", r: 255, g: 165, b: 0 },
    { name: "Rosa", r: 255, g: 192, b: 203 },
    { name: "Violeta", r: 128, g: 0, b: 128 },
  ];

  let closest = null;
  let minDist = Infinity;

  for (const c of colors) {
    const dist = Math.sqrt(
      (r - c.r) ** 2 + (g - c.g) ** 2 + (b - c.b) ** 2
    );
    if (dist < minDist) {
      minDist = dist;
      closest = c;
    }
  }

  return closest ? closest.name : "Desconocido";
}

export default function ColorCamera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detected, setDetected] = useState(null);
  const [error, setError] = useState(null);

  // Activar cámara
  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        setError("No se pudo acceder a la cámara. Verificá permisos.");
      }
    }
    enableCamera();
  }, []);

  // Detectar color al tocar el video
  const getColorFromCamera = (e) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    const rect = video.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;

    setDetected({
      rgb: `rgb(${r}, ${g}, ${b})`,
      name: getColorName(r, g, b),
    });
  };

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
        <BackButton />

        <h2 style={{ marginBottom: 10 }}>Detector de Colores con Cámara</h2>

        <p style={{ fontSize: 14, opacity: 0.7 }}>
          Tocá sobre la imagen de la cámara para identificar el color.
        </p>

        {error && (
          <p style={{ color: "red", marginTop: 10 }}>{error}</p>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          onClick={getColorFromCamera}
          style={{
            width: "100%",
            marginTop: 15,
            borderRadius: 10,
            border: "2px solid #ccc",
            cursor: "crosshair",
          }}
        />

        <canvas ref={canvasRef} style={{ display: "none" }} />

        {detected && (
          <div
            style={{
              marginTop: 20,
              padding: 15,
              display: "inline-block",
              background: "#ffffff",
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                background: detected.rgb,
                borderRadius: 8,
                margin: "0 auto 10px",
                border: "1px solid black",
              }}
            ></div>

            <p>
              <b>Color:</b> {detected.name}
            </p>

            <p style={{ fontSize: 12, opacity: 0.6 }}>{detected.rgb}</p>
          </div>
        )}
      </div>
    </div>
  );
}
