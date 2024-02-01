import express, { Request, Response } from "express";
import databaseConnection from "../models/database";

const router = express.Router();

// Para leer las solicitudes JSON
router.use(express.json());

// Definir ruta de prueba
router.get("/", () => {
  console.log("Server working correctly");
});

// Crear jugador
router.post("/players", (req: Request, res: Response) => {
  // Extraer el nombre del cuerpo de la solicitud
  const { name } = req.body;

  // Si no escribe nada que sea Anónimo
  const playerName = name || 'Anónimo';

  // Realizar la inserción en la base de datos
  databaseConnection.query(
    'INSERT INTO players (name) VALUES (?)',
    [playerName],
    (error, results, fields) => {
        if (error) {
            console.error("Error al insertar el jugador:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }

        // Si la inserción fue exitosa, devolver una respuesta de éxito
        return res.status(201).json({ message: "Jugador creado exitosamente" });
    }
);
});

// Modificar nombre jugador
router.put("/players/:id", (req: Request, res: Response) => {

});

// Retornar el listado de todos los jugadores con su porcentaje de éxito
router.get("/players", (req: Request, res: Response) => {
  
});

// Un jugador específico realiza una tirada
router.post("/games/:id", (req: Request, res: Response) => {
  
});

// Elimina el historial de  tiradas del jugador
router.delete("/games/:id", (req: Request, res: Response) => {
  
});

// Retornar listado de jugadas por un jugador específico
router.get("/games/:id", (req: Request, res: Response) => {
  
});

// Mostrar ranking de jugadores ordenado por porcentaje de exito y porcentaje medio de todos los jugadores
router.get("/ranking", (req: Request, res: Response) => {
  
});

// Mostrar jugador con peor winrate
router.get("/ranking/loser", (req: Request, res: Response) => {
  
});

// mostrar jugador con mejor winrate
router.get("/ranking/winner", (req: Request, res: Response) => {
  
});

export default router;