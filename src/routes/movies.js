'use strict'
const {Router} = require ('express');
const router = Router ();
const movies = require ('../database.json');
// LEER - GET
router.get ('/', (req, res) => {
    res.json (movies);
});
// CREAR - POST
router.post ('/', (req, res) => {
    const {name, genre, year} = req.body;
    if (name, genre, year) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push (newMovie);
        console.log ('Received');
        console.log (newMovie);
        res.json (movies);
    }
    else {
        console.log ('Wrong Request');
        res.json ({
            error: 'There was an error.'
        });
    }
});
// ACTUALIZAR - PUT
router.put ('/:id', (req, res) => {
    const {id} = req.params;
    const {name, genre, year} = req.body;
    if (name, genre, year) {
        for (let i = 0; i < movies.length; i++) {
            if (movies [i].id == id) {
                movies [i].name = name;
                movies [i].genre = genre;
                movies [i].year = year;
            }
        }
        res.json (movies);
    }
    else {
        res.status (500).json ({
            error: 'There was an error'
        });
    }
});
// ELIMINAR - DELETE
router.delete ('/:id', (req, res) => {
    const {id} = req.params;
    const index = movies.findIndex (x => x.id == id);
    movies.splice (index, 1);
    res.json (movies);
});
module.exports = router;