"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./models/database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 21017;
app.get("/", () => {
    console.log("Server working correctly");
});
database_1.default.connect((err) => {
    if (err) {
        console.error("❌ Error de conexión a la base de datos: ", err);
        return;
    }
    console.log("🛢️ Connected to MySQL database");
    app.listen(PORT, () => {
        console.log(`✅ Server listening at http://localhost:${PORT}`);
        console.log("✋ Press CTRL-C to stop\n");
    });
});
//# sourceMappingURL=server.js.map