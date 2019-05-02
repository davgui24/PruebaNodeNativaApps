const express = require("express");
const app = express();
const request = require("request");

const Pelicula = require("../modelo/peliculas");



const url = "http://www.omdbapi.com";

// http://www.omdbapi.com/?apikey=5eec5adc&t=a&y=2010
app.post("/", (req, res, next) => {
    let body = req.body;
    let apikey = body.apikey;
    let titulo = body.titulo;
    let year = body.year;

    let pelicula = new Pelicula({

    });

    request(url + '/?apikey=' + apikey + '&t=' + titulo + '&y=' + year, function(err, rest, body) {
        let json = JSON.parse(body);
        if (rest) {
            // return res.status(200).json({
            //     titulo,
            //     year,
            //     genenero: json.Genre,
            //     director: json.Director,
            //     actor: json.Actors,
            //     lenguage: json.Language,
            //     pais: json.Country
            // });

            let pelicula = new Pelicula({
                titulo: titulo,
                year: Number(year),
                genero: json.Genre,
                diretor: json.Director,
                actor: json.Actors,
                lenguage: json.Language,
                pais: json.Country
            });


            // ---------


            pelicula.save((err, peliculaSave) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: "Error al crear el usuario",
                        errors: err
                    });
                }
                return res.status(201).json({
                    ok: true,
                    usuario: peliculaSave,
                });
            });

        }
    });
});

module.exports = app;