const Filmes = require('../models/films');

exports.createdFilmes = async (req, res) => {
  try {
    const createdFilmes = await Filmes.create(req.body);
    return res.status(200).send({createdFilmes});
  } catch (error) {
    return res.status(400).send({error: 'Cadastro falhou!'});
  }
}