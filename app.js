const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

app = express();
const server = http.createServer(app);

const io = socketio(server);

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));
io.on("connection",(socket)=>{
    socket.emit('socketid',socket.id);
    console.log("connected ",socket.id);
    socket.on('send-message',(msg)=>{
        io.emit('recieve-message',{
            id: socket.id,
            message: msg
        })
    })
})

app.get("/",function (req,res) {
    // res.send("Hey");
    res.render("index");
})

server.listen(3000, function(){
    console.log("listening on *:3000");
});