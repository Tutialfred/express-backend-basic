const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const users = require("../routes/users");
const home = require("../routes/home")
require("ejs");
const connectDB = require("./dataBase")

connectDB()
// Antes de que empieze la aplicacion, de que configure express
// Conectate a la base de datos


// Settings โ ๐ง โ "tipos de variables"
// Establecer una configuracion con 'set'

app.set("appName", "`Express Course`")
app.set("case sensitive routing", true) //Palabra reservada de Express (respetar mayuscula)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// ๐จ๐ปโ๐ญ Los middlewares contienen un tercer parametro llamado next() โ diciendole que puede continuar
// en el caso que no contenga el next, el middleware se queda cargando "tipo bucle infinito" por que no continua con la funcion 

// Middlewares โ NPM i Morgan
app.use(morgan("dev"))

// ๐ Routes
app.use(home);
app.use(users);

// โโโโโ COMENTANDO PARA PODER TRABAJARLO CON EL 'STATIC' DE ABAJO โโโโโ
//๐งถ middlewares 2 โ (isAunteticated) == "Proteger rutas 'dashboard' y 'profile'"

// app.use((req, res, next) =>{
//     if(req.query.login === "tuti@icloud.com"){
//         next()
//     }else {
//         res.send("No autorizado")
//     }
// });

// โโโโโ


//Desde esta โ ruta         Poder acceder a estos archivos โ
app.use("/public", express.static(path.join(__dirname, "./public")))

app.listen(port);
console.log("server", app.get("appName"), "on port", port);



// rest api === Representational State Transfer
// Un servidor con ciertas URL en las que podemos procesar datos.

// 03:48 ๐งช
// Base de Datos ๐ฅ === Database