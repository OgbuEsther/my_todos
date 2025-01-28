//import 
const express = require("express")
const mongoose = require("mongoose")
const todoRoutes = require("./routes/todoRoutes")
const userRoutes = require("./routes/userRoutes")

mongoose.connect("mongodb://localhost:27017/TODO_APP").then(()=>{
    console.log("mongodb is connected")
}).catch((error)=>{
    console.log("failed to connect" , error)
})

const app = express()

app.use(express.json())
app.use("/todo" , todoRoutes)
app.use("/user" , userRoutes)

const port = 9999

app.get("/" , (req , res)=>{
    res.send("api is ready!!!!")
})

app.listen(port , ()=>{
    console.log(`server is up port ${port}`)
})