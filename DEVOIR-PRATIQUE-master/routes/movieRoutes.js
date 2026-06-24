
const express=require ("express");
const router = express.Router();
const {getmovies, getmovieById}=require("../controleurs/movieControleurs");
//route pour recup tt les films
router.get("/",getmovies);
//une route qui permet de recup un film a partir de son id 
router.get("/:id", getmovieById);

module.exports=router; 