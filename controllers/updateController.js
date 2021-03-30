const Filmes = require("../models/films")

exports.updateFilmes = async (req, res, next) => {
  try {
    await Filmes.findById(req.params.id).then((filmes) => {
      filmes.name = req.body.name;
      filmes.director = req.body.director;
      filmes.year = req.body.year;
      filmes.save();
      return res.status(200).json({message: 'Dados de filme atualizado com sucesso'});
    });
  } catch (error) {
    res.status(400).send({error});
  }
}