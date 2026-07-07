import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import notFound from "./src/middleware/notFound.js";
import errorHandler from "./src/middleware/errorMiddleware.js";
import testRoute from "./src/routes/testRoute.js";
import inventoryRoutes from "./src/routes/inventoryRoutes.js";
import analyticsRoutes from "./src/routes/analyticsRoutes.js";


const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Aura Enterprise Engine API Running"
    });
});

app.use("/api/test", testRoute);

app.use("/api/inventory", inventoryRoutes);

app.use("/api/analytics", analyticsRoutes);
app.use(notFound);

app.use(errorHandler);

export default app;