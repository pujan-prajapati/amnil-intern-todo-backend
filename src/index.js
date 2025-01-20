import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
