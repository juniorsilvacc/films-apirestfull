const Filmes = require("../models/films")

exports.deleteFilmes = (req, res) => {
  try {
    Filmes.findById(req.params.id).then((filmes) => {
      filmes.name = req.body.name;
      filmes.director = req.body.director;
      filmes.year = req.body.year;
      filmes.delete();
      return res.status(200).json(filmes);
    });
  } catch (error) {
    res.status(400).send(error);
  }
}