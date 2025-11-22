
# 🎨 TFG – Test de Daltonismo (Ishihara + Detección de Colores)

Este proyecto forma parte de la **Tesis Final de Grado (TFG)**.  
Se compone de dos partes:

- **Frontend (React)** – Aplicación que permite realizar el test de Ishihara, detectar colores mediante imágenes o cámara, y visualizar un historial.
- **Backend (Spring Boot + MySQL)** – API REST para guardar y consultar resultados del test.

---

# 📁 Estructura del Proyecto

TFG/
│── tfg-app/ # Frontend (React)
└── tfg-backend/ # Backend (Spring Boot)


---

# ⚙️ Requisitos

## 📌 General
- Windows 10/11 (o Linux/Mac)
- Git instalado

## 📌 Frontend
- Node.js 18+  
- npm 9+

## 📌 Backend
- Java 17 (recomendado)
- Maven (incluido en IntelliJ)
- MySQL Community Server 8+

---

# 🗄️ Configuración del Backend

## 1️⃣ Crear la base de datos en MySQL

```sql
CREATE DATABASE tfg_database;
```
Configurar credenciales (por defecto del proyecto)

Editar:
```
tfg-backend/src/main/resources/application.properties
```
Y debe quedar así:
```
spring.datasource.url=jdbc:mysql://localhost:3306/tfg_database
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```
Cómo ejecutar el Backend (Spring Boot)

Abrir IntelliJ IDEA

Seleccionar:
File → Open → tfg-backend

Esperar a que descargue dependencias

Ejecutar:
```
src/main/java/com/tfg/tfgbackend/TfgBackendApplication.java
```
Cómo ejecutar el Frontend (React)

Abrir consola:
```
cd tfg-app
```
Instalar dependencias:
```
npm install
```
Ejecutar:
```
npm start
```
Conexión Frontend → Backend

El frontend consume la API del backend mediante:
```
http://localhost:8080/api/results
```

👤 Autor

Juan Pablo Lopez
Tesis Final de Grado – Aplicación para detección de daltonismo
>>>>>>> 751dec0b1faa49715aece0bc55e4ff8988238784
