const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.render("main")
});


router.get("/dashboard", (req, res) => {

    const mensaje = "Gracias, usted ahora es miembro Premium ✔"
    const mensaje2 = "Pago rechazado, su tarjeta no tiene el saldo suficiente. te esperamos 👨🏻‍🏭"

    res.render("dashboard", { mensaje2, mensaje })
    // 'render' viene del → ejs
});

router.get("/post", (req, res) => {

    res.render("main")
});

module.exports = router
