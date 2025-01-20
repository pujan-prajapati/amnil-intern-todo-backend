import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["None", "High", "Medium", "Low"],
      required: true,
      default: "None",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
export const Todo = mongoose.model("Todo", todoSchema);
