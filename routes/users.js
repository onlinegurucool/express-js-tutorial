const express = require("express");
const router = express.Router();

const userModel = require("../models/user");

let form = require("express-form");
let field = form.field;

router.post(
    "/create",
    form(
        field("first_name").trim().required("", "First Name is mandatory"),
        field("last_name").trim().required(),
        field("mobile")
            .trim()
            .required("", "Mobile is mandatory")
            .isNumeric()
            .custom((value, source, cb) => {
                let num = value.toString();
                if (num.length < 10 || num.length > 11) {
                    return cb(
                        new Error("Mobile number is to short or to Long")
                    );
                }
                if (num.length == 11 && num[0] != 0) {
                    return cb(new Error("Mobile Number is invalid"));
                }
                return cb(null)
            }),
        field("email").trim().required().isEmail()
    ),
    async (req, res) => {
        if (!req.form.isValid) {
            return res.send({
                msg: "Validation Error",
                error: req.form.getErrors(),
            });
        }
        let data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            mobile: req.body.mobile,
            email: req.body.email,
        };
        let resp = {};
        let err = {};
        try {
            resp = await userModel.create(data);
        } catch (error) {
            err = error;
        }
        res.send({
            resp: resp,
            error: err,
        });
    }
);

module.exports = router;
