import "dotenv/config.js";
import connectDB from "./config/database";
import app from "./presentation/server.js";
const PORT = process.env.PORT || 3000;
connectDB().thet(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
})
