/**
 * Controlador de prueba simple sin importaciones complejas
 */

export const testController = async (req, res) => {
  try {
    res.json({ 
      message: "✅ Controlador de prueba funcionando", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
