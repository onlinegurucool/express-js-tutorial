const express = require('express');
const router = express.Router();


router.post("/",(req,res) => {
    res.send({
        user: {
            name : "Online Gurucool"
        }
    })
})


router.post("/get-data-from-client/:category/:product_id",(req,res) => {
    console.log(`query ${JSON.stringify(req.query)}`);
    console.log(`params ${JSON.stringify(req.params)}`);
    console.log(`body ${JSON.stringify(req.body)}`);
})


module.exports = router;