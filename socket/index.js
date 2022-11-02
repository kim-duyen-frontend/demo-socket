import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    // console.log(`connected socket: ",${socket.id}`);
    io.emit("firstEvent","Hello World!");
});

io.listen(4000);