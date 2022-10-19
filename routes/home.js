const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("HOMEPAG")
});

router.get("/dashboard", (req, res) => {

    const mensaje = "Gracias, usted ahora es miembro Premium ✔"
    const mensaje2 = "Pago rechazado, su tarjeta no tiene el saldo suficiente. te esperamos 👨🏻‍🏭"

    res.render("index.ejs", { mensaje2 })
});

module.exports = router
