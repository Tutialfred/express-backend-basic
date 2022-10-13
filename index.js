const express = require("express");
const app = express();
const port = 3000;

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
    console.log(req.params)
    res.send("hi bro")
})

app.listen(port);
console.log("Server port on" , port);





// ⏳ 01:12:00
// 📌 Request params 
