import { Todo } from "../models/todo.model.js";
import asyncHandler from "express-async-handler";
import { ApiResponse } from "../utils/ApiResponse.js";

// add todo
export const addTodo = asyncHandler(async (req, res) => {
  const { task } = req.body;

  const todo = await Todo.create({
    task,
  });

  res.status(201).json(new ApiResponse(201, todo, "Todo added successfully"));
});

// get all todos
export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res
    .status(200)
    .json(new ApiResponse(200, todos, "Todos fetched successfully"));
});

// delete todo
export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const findTodo = await Todo.findById(id);
  if (!findTodo) {
    throw new Error("Todo not found");
  }

  const todo = await Todo.findByIdAndDelete(findTodo._id);

  res.status(200).json(new ApiResponse(200, todo, "Todo deleted successfully"));
});

// update todo
export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { priority, completed } = req.body;

  const findTodo = await Todo.findById(id);
  if (!findTodo) {
    throw new Error("Todo not found");
  }

  const todo = await Todo.findByIdAndUpdate(
    findTodo._id,
    { priority, completed },
    { new: true }
  );

  res.status(200).json(new ApiResponse(200, todo, "Todo updated successfully"));
});
