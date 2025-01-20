import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to DB failed : ", error);
  }
};
