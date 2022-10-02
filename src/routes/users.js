'use strict'
const {Router} = require ('express');
const nodeFetch = require ('node-fetch');
const router = Router ();
router.get ('/', async (req, res) => {
    const response = await nodeFetch ('https://jsonplaceholder.typicode.com/users/1/albums');
    const albums = await response.json ();
    console.log (albums);
    res.json (albums);
});
module.exports = router;