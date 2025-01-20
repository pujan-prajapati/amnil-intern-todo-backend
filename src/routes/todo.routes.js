import express from "express";
const router = express.Router();
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controllers.js";

router.route("/").post(addTodo);

router.route("/:id").put(updateTodo);

router.route("/:id").delete(deleteTodo);

router.route("/").get(getAllTodos);

export default router;
