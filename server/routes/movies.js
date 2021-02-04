const express = require('express');
const app = express();
const Movie = require("../schemes/movie");
const { v4: uuidv4 } = require('uuid');
const request = require('request');




app.post('/createMovieAndList', async (req, res) => {

  const title = 'Love';
  const apikey = '5eec5adc';


        return request({
          url: `http://www.omdbapi.com/?apikey=${apikey}&t=${title}&y=2020&type=movie`,
          method: 'GET',

         }, (err, body) => {
         if(err){
           return  res.status(400).json({
            ok: false,
            err
           });
         }

      if(body){
        const resp = JSON.parse(body.body);

            let newMovie = new Movie({
              _id: uuidv4(),
              title: resp.Title,
              year:  resp.Year,
              genere: resp.Genre,
              director: resp.Director,
              actors: resp.Actors,
              country: resp.Country,
              language: resp.Language,
              poster: resp.Poster,
              runtime: resp.Runtime,
              rated: resp.Rated,
              ratings: resp.Ratings
          });
          newMovie.save((e, newMovieDB) =>{


            Movie.find({}, async (err, list) => {
              if(!newMovieDB){
                return res.status(200).json({
                  ok: false,
                  message: 'Erro al crear la película',
                  error: e.message,
                  listMovie: list
                 });
              }
  
  
              return res.status(200).json({
                ok: true,
                newMovieDB,
                message: 'Nueva película agregada',
                listMovie: list
               });
  
            });

      
           });
      }
    });
});



module.exports = app;