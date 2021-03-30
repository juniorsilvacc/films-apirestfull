function createFilme(){
  const nameInput = document.getElementById("name");
  const directorInput = document.getElementById("director");
  const yearInput = document.getElementById("year");

  const filme = {
    name: nameInput.value,
    director: directorInput.value,
    year: yearInput.value
  }

  axios.post("http://localhost:4040/filmes", filme).then((res) => {
    if(res.status == 200){
      alert("Filme cadastrado")
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

axios.get("http://localhost:4040/filmes").then(res => {
      const filmes = res.data;
      const list = document.getElementById("filmes");

      filmes.forEach((filme) => {
        const item = document.createElement("li");
        item.innerHTML = `Nome: ${filme.name} <br> Diretor: ${filme.director} <br> Ano de lançamento: ${filme.year}`;
        list.appendChild(item);
      });

    }).catch(error => {
      console.log(error);
    });