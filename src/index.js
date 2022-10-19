const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const users = require("../routes/users");
const home = require("../routes/home")
require("ejs");


// Settings ↓ 🔧 → "tipos de variables"
// Establecer una configuracion con 'set'

app.set("appName", "`Express Course`")
app.set("case sensitive routing", true) //Palabra reservada de Express (respetar mayuscula)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// 👨🏻‍🏭 Los middlewares contienen un tercer parametro llamado next() → diciendole que puede continuar
// en el caso que no contenga el next, el middleware se queda cargando "tipo bucle infinito" por que no continua con la funcion 

// Middlewares ↓ NPM i Morgan
app.use(morgan("dev"))

// 📍 Routes
app.use(home);
app.use(users);

// ❌❌❌❌❌ COMENTANDO PARA PODER TRABAJARLO CON EL 'STATIC' DE ABAJO ❌❌❌❌❌
//🧶 middlewares 2 → (isAunteticated) == "Proteger rutas 'dashboard' y 'profile'"

// app.use((req, res, next) =>{
//     if(req.query.login === "tuti@icloud.com"){
//         next()
//     }else {
//         res.send("No autorizado")
//     }
// });

// ❌❌❌❌❌


//Desde esta ↓ ruta         Poder acceder a estos archivos ↓
app.use("/public", express.static(path.join(__dirname, "./public")))

app.listen(port);
console.log("server", app.get("appName"), "on port", port);



// rest api === Representational State Transfer
// Un servidor con ciertas URL en las que podemos procesar datos.

// 03:19 🧪
// EJS Partials 🔥