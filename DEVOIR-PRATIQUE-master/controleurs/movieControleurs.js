//fonction qui permet de recup tt les films

const movies = require('../models/movieModel');

const getmovies = async (req, res) => {
    //logique metier ici
    res.json(movies);
};

// fonction qui permet de recup un film a partir de son id
const getmovieById = async (req, res) => {
    const { id } = req.params;
    const movie = movies.find(m => m.id === parseInt(id));
    
    if (!movie) {
        return res.status(404).json({ message: 'Film non trouvé' });
    }
    
    res.json(movie);
};

module.exports = {
    getmovies,
    getmovieById
};