const Filmes = require('../models/films');

exports.selectedFilmes = async (req, res) => {
  try {
    await Filmes.findById(req.params.id).then((filmes)=>{
      return res.status(200).json(filmes);
    })
  } catch (error) {
    res.status(400).send({error})
  }

  /*Filmes.findById(req.params.id, (error, filmes) => {
    if(error) {
      res.send(error)
    }
      res.json(filmes);
  })*/
}