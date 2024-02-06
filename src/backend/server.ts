// Importar express
import express from "express";
// Importar base de datos
import databaseConnection from "./models/database";
import diceRoutes from "./routes/diceRoutes";

// Crear una instancia app de express
const app = express();

// Para leer las solicitudes JSON
app.use(express.json());

// Montar las rutas de los dados en la ruta base '/api'
app.use("/api", diceRoutes);

// Definir puerto
const PORT = process.env.PORT || 21017;

// Iniciar conexión a la base de datos
databaseConnection.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión a la base de datos: ", err);
    return;
  }
  console.log("🛢️ Connected to MySQL database");

  // Iniciar el servidor una vez la base de datos se haya conectado
  app.listen(PORT, () => {
    console.log(`✅ Server listening at http://localhost:${PORT}`);
    console.log("✋ Press CTRL-C to stop\n");
  });
});
