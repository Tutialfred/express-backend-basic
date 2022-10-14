const express = require("express");
const app = express();
const port = 3000;

// Middlewares↓ logger
app.use((req, res, next) =>{
    console.log(`Route: ${req.url} Method: ${req.method}`);

    // ↓ next === continua
    next()
});

//🧶 middlewares 2 (isAunteticated)
app.use((req, res, next) =>{
    console.log(`Route: ${req.url} Method: ${req.method}`);

    // ↓ next === continua
    next()
});


app.get("/dashboard", (req, res) => {
    res.send("dashboard page")
})

app.get("/profile", (req, res) =>{
    res.send("profile page");
});

app.get("/home", (req, res) =>{
    res.send("AT HOME");
});



app.listen(port);
console.log("server on port", port);

// ⏳ 01:49:00
// 📌 introduccion a middlewares 2