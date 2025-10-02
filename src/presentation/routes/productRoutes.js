import { Router } from "express";

import {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/ProductController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * Rutas para la gestión de productos.
 *
 * Rutas públicas (sin autenticación):
 * - `GET /` → Obtiene todos los productos (catálogo público).
 * - `GET /:id` → Obtiene un producto por su ID (detalles públicos).
 *
 * Rutas protegidas (requieren autenticación JWT):
 * - `POST /` → Crea un nuevo producto.
 * - `PUT /:id` → Actualiza un producto existente por su ID.
 * - `DELETE /:id` → Elimina un producto por su ID.
 *
 * @module productRoutes
 *
 * @example
 * // Registro en app.js o server.js
 * import productRoutes from "./presentation/routes/productRoutes.js";
 * app.use("/products", productRoutes);
 */
router.post("/", authMiddleware, createProduct);
router.get("/", getProduct);  // Público - para mostrar catálogo
router.get("/:id", getProductById);  // Público - para ver detalles
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
