const Filmes = require("../models/films")

exports.deleteFilmes = async (req, res) => {
  try {
    await Filmes.findById(req.params.id).then((filmes) => {
      filmes.name = req.body.name;
      filmes.director = req.body.director;
      filmes.year = req.body.year;
      filmes.delete();
      return res.status(200).json({message: 'Filme deletado com sucesso'});
    });
  } catch (error) {
    res.status(400).send({error});
  }
}