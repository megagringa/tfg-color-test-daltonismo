function Menu() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TFG – Daltonismo</h1>

      <div style={styles.menu}>
        <Link to="/colores">
          <button style={styles.button}>Ver Colores (Imagen)</button>
        </Link>

        <Link to="/camera">
          <button style={styles.button}>Ver Colores (Cámara)</button>
        </Link>

        <Link to="/ishihara">
          <button style={styles.button}>Test de Ishihara</button>
        </Link>
      </div>
    </div>
  );
}