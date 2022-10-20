const express = require("express");
const router = express.Router();
const axios = require("axios")

router.get("/", (req, res) => {

    res.render("main")
});


router.get("/dashboard", (req, res) => {

    const mensaje = "Gracias, usted ahora es miembro Premium ✔"
    const mensaje2 = "Pago rechazado, su tarjeta no tiene el saldo suficiente. te esperamos 👨🏻‍🏭"

    res.render("dashboard", { mensaje2, mensaje })
    // 'render' viene del → ejs
});

router.get("/post", async (req, res) => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")


    res.render("post", { post: response.data})
});

module.exports = router
