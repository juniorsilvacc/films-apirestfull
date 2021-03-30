const Filmes = require('../models/films');

exports.searchFilmes = async (req, res) => {

  try {
    await Filmes.find({}).then((filmes) => {
      return res.status(200).json(filmes);
    });
  } catch (error) {
    res.status(400).send({error});
  }

  //Outras formas de listagem

  /*Filmes.find({}).then((filmes) => {
    return res.json(filmes)
  }).catch((err) => {
    res.status(400).send({err: 'Listagem falhou!'});
  })

  /*Filmes.find((error, filmes) => {
    if(error) {
      res.status(400).send({error: 'Listagem falhou!'})
    }
    res.json(filmes)
  })*/
}