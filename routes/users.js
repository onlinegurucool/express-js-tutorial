const express = require("express");
const router = express.Router();

const userModel = require("../models/user");

router.post("/edit/:user_id", async (req, res) => {
    try {
        let data = {
            first_name: req.body.first_name,
        };
        let resp = await userModel.update(data, req.params.user_id);
        res.send({
            msg: "User Updated successfully",
            resp,
        });
    } catch (error) {
        res.send({
            msg: error.message,
            error,
        });
    }
});

router.param("user_id", async (req, res, next, id) => {
    try {
        let resp = await userModel.read(id);
        if(!resp.length) {
            res.send({
                msg: "This id is not valid",
            });
        }
    } catch (error) {
        res.send({
            msg: "Error while validating params",
            error,
        });
    }
    next();
});

module.exports = router;
