import express from "express";
import dotenv from "dotenv";
import cors from "cors";
export const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// routes
import todoRoutes from "./routes/todo.routes.js";

app.use("/api/v1/todos", todoRoutes);

//middlewares
import {
  errorHandler,
  notFound,
} from "./middleware/errorHanlder.middleware.js";

app.use(errorHandler);
app.use(notFound);
