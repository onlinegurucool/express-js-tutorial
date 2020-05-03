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

module.exports = router;
