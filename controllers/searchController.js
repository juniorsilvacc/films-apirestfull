const Filmes = require('../models/films');

exports.searchFilmes = (req, res) => {

  /*Filmes.find({}).then((filmes) => {
    return res.json(filmes)
  }).catch((err) => {
    res.status(400).send({err: 'Listagem falhou!'});
  })*/

  try {
    Filmes.find({}).then((filmes) => {
      return res.json(filmes);
    })
  } catch (error) {
    res.status(400).send({err: 'Listagem falhou!'});
  }


  
  /*Filmes.find((error, filmes) => {
    if(error) {
      res.status(400).send({error: 'Listagem falhou!'})
    }
    res.json(filmes)
  })*/
}