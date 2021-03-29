const Filmes = require('../models/films');

exports.films = async (req, res) => {
  try {
    const films = await Filmes.create(req.body);
    return res.send({films});
  } catch (error) {
    return res.status(400).send({error: 'Cadastro falhou!'});
  }
}