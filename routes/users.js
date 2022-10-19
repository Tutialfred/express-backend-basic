const express = require("express");
const router = express.Router();

router.get("/userName", (req, res) => {

    const userOnline = false

    res.render("userName", { userOnline })
});

router.get("/profile", (req, res) => {

    let  list = "List now is 5"
    res.render("profile.ejs", { list })
});

module.exports = router