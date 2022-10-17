const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) =>{
    res.send("AT HOME");
});


// Middlewares↓ logger
app.use((req, res, next) =>{
    console.log(`Route: ${req.url} Method: ${req.method}`);

    // ↓ next === continua
    next()
});

//🧶 middlewares 2 → (isAunteticated) == "Proteger rutas 'dashboard' y 'profile'"
app.use((req, res, next) =>{
    if(req.query.login === "tuti@icloud.com"){
        next()
    }else {
        res.send("No autorizado")
    }
});


app.get("/dashboard", (req, res) => {
    res.send("dashboard page")
});

app.get("/profile", (req, res) =>{
    res.send("profile page");
});




app.listen(port);
console.log("server on port", port);

// ⏳ 01:57:00
// 📌 Middleware interceptor