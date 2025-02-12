const express = require("express")
const { newTodo, updated_todo, delete_Todo ,getTodos } = require("../controller/todoController")

const todoRoutes = express.Router()
todoRoutes.post("/add-todo/:userId" , newTodo)
todoRoutes.get("/" , getTodos)
todoRoutes.patch("/update/:todoId" , updated_todo)
todoRoutes.delete("/remove/:todoId" , delete_Todo)



module.exports = todoRoutes