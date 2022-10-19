const express = require("express");
const router = express.Router();

router.get("/userName", (req, res) => {
    res.send("Welcome to 'user Name ⚔'");
});

router.get("/profile", (req, res) => {
    res.send("profile page official");
});

module.exports = router