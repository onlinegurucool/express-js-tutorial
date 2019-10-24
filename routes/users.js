const express = require("express");
const router = express.Router();

const userModel = require('../models/user')

router.post("/create", async (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile: req.body.mobile,
        email : req.body.email
    }
    let resp = {};
    let err = {};
    try {
        resp = await userModel.create(data);
    } catch (error) {
        err  = error;
    }
    res.send({
        resp: resp,
        error: err
    })
});

module.exports = router;
