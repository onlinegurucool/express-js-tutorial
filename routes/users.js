const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        page: "User"
    });
});

module.exports = router;
