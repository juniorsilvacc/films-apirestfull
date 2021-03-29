exports.home = (req, res, next) => {
  console.log("Algo está acontecendo aqui...");
  res.json({message: 'Ok! agora pode começar sua API, tudo certo e configurado! Valeu e Falow :D'})
}