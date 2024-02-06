// Configurar base de datos
// Importar MySQL
import mysql from 'mysql2';

// Configurar conexión a base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sprint6',
  password: '1234',
  database: 'dicedb'
})

// Exportar la conexión, puede hacer falta en otros archivos
export default connection;