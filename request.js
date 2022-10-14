const express = require("express");
const app = express();
const port = 3000;

// Decirle al backend que procese los datos que le envia el cliente 
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post("/user", (req, res) => {
    console.log(req.body)
    
    res.send("<h1>Bro code</h1> <h3>new user created</h3>")
});



// Concatenando request url con response
// Creando una parametro (params) en la URL con → :

app.get("/user/:names", (req, res) =>{
    console.log(req.query);
    // Example ig ↑ === ?theme=dark
    res.send(`Hello, Welcome ${req.params.names}`)
});


// Condicional ↓

app.get("/users/:username/photo", (req, res) => {

    if(req.params.username === "tuti"){
        return res.sendFile("./2023.PNG", { root: __dirname})
    }

    res.send("<h3>El usuario no tienes acceso</h3>")
});


// Una forma de utilizar todos los verbos ↓
app.all("/info", (req, res) => {
    res.send("Server info")
})









app.listen(port);
console.log("Server port on" , port);





