import express from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import orderDetailsRoutes from "./routes/orderDetailsRoutes";

import loginRoutes from "./routes/loginRoutes";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/productRoutes", productRoutes);
app.use("/api/ordeRoutes"), orderRoutes;
app.use("/api/orderDetailsRoutes", orderDetailsRoutes);

app.use("/api/loginRoutes", loginRoutes)

export default app;