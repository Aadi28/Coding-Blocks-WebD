const express = require("express")
const server = express()

let todo = []

server.use("/", express.static(__dirname + "/Static"))

server.get("/add", (req, res) => {
    todo.push(req.query.task)
    res.send("Success")
})

server.get("/del", (req, res) => {
    let index
    for (let i = 0; i < todo.length; i++) {
        if (req.query.dat == todo[i]) {
            index = i
        }
    }
    todo.splice(index, 1)
    res.send("Success")
})

server.get('/todo', (req, res) => {
    res.send(todo)
})


server.listen(4444, () => {
    console.log("Server Started Succesfully http://127.0.0.1:4444/")
})