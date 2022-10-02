'use strict'
const {Router} = require ('express');
const router = Router ();
router.get ('/', (req, res) => {
    res.json ({
       'title': 'Hola mundo'
    })
})
module.exports = router;