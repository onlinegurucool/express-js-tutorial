const router = require('express').Router();


router.get('/',(req,res) => {
    res.send({
        page: 'Home'
    })
})

module.exports = router;