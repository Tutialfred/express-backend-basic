// 📀 Examples 📀

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world 🎁");
});

// Responder con imagen 🎨

app.get("/galery", (req, res) => {
    res.sendFile("./2023.PNG", {
        root: __dirname, //← Raiz donde empezar buscar
        // __dirname === donde esta nuestro archivo desde la ruta inicial del disco duro
    });
});

//Responder con un formato JSON 📏

app.get("/users", (req, res) => {
    res.json({
        username: "tutialfred",
        age: 21,
        country: "Argentina",
    });
});

// Responder codigo de status 💥

app.get("/isAlive",(req, res)=> {
    res.sendStatus(204)
    // No cambia de pagina, solo manda el estado (status)
});

app.listen(3000);
console.log("server on port 3000");

