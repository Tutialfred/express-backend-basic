const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.get("/home", (req, res) =>{
    res.send("AT HOME");
});

// Los middlewares contienen un tercer parametro llamado next() → diciendole que puede continuar
// en el caso que no contenga el next, el middleware se queda cargando "tipo bucle infinito" por que no continua con la funcion 

// Middlewares ↓ NPM Morgan
app.use(morgan("dev"))


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




// rest api === Representational State Transfer
// Un servidor con ciertas URL en las que podemos procesar datos.