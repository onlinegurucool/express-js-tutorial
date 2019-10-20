const express = require('express');
const router = express.Router();


router.post("/",(req,res) => {
    res.send({
        user: {
            name : "Online Gurucool"
        }
    })
})


router.post("/get-data-from-client/:category/:product_id",
    (req,res,next) => {
        let index = 2
        if(!req.body.user_id) {
            res.send({
                msg: "Validation Error",
                error: "User ID is required"
            })
        } else {
            req.nextOptions = {
                indexInNextFunction: index,
                newKey: 2
            }
            next();
        }
    },
    (req,res) => {
    console.log(`query ${JSON.stringify(req.query)}`);
    console.log(`params ${JSON.stringify(req.params)}`);
    console.log(`body ${JSON.stringify(req.body)}`);
    res.send({
        msg: "success",
        data: req.body,
        nextOptions: req.nextOptions
    })
})

router.get('/profile',(req,res) => {
    res.render('profile',{})
})


module.exports = router;