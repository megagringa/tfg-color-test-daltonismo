import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";

export default function ColorCamera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [color, setColor] = useState(null);
  const [error, setError] = useState(null);

  // Activar cámara
  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // cámara trasera si existe
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        setError("No se pudo acceder a la cámara. Verificá permisos.");
      }
    }

    enableCamera();
  }, []);

  // Detectar color haciendo clic en el video
  const getColorFromCamera = (e) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const rect = video.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const rgbColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    setColor(rgbColor);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <BackButton />

      <h2>Detector de Colores con Cámara</h2>

      <p style={{ fontSize: 14, opacity: 0.8 }}>
        Apuntá la cámara y tocá sobre la zona cuyo color quieras identificar.
      </p>

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>{error}</p>
      )}

      {/* Video en vivo */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        onClick={getColorFromCamera}
        style={{
          width: "90%",
          maxWidth: 400,
          cursor: "crosshair",
          borderRadius: 10,
          border: "1px solid #ccc",
        }}
      />

      {/* Canvas oculto (solo para obtener el color) */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Resultado del color */}
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
