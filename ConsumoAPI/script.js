//Listagem de filmes
axios.get("http://localhost:4040/filmes").then(res => {
  const filmes = res.data;
  const list = document.getElementById("filmes");

  filmes.forEach((filme) => {
    const item = document.createElement("li");

    item.setAttribute("data-id", filme._id);
    item.setAttribute("data-name", filme.name);
    item.setAttribute("data-director", filme.director);
    item.setAttribute("data-year", filme.year);

    item.innerHTML = `
      <strong>Nome:</strong> ${filme.name} <br>
      <strong>Diretor:</strong> ${filme.director} <br>
      <strong>Ana de lançamento:</strong> ${filme.year}
    `;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Deletar";
    deleteButton.addEventListener("click", () => {
      deleteFilme(item)
    })

    item.appendChild(deleteButton);

    list.appendChild(item);

  });
}).catch(error => {
  console.log(error);
});

//Função de criar filmes
function createFilme(){
  const idInput = document.getElementById("id");
  const nameInput = document.getElementById("name");
  const directorInput = document.getElementById("director");
  const yearInput = document.getElementById("year");

  const filme = {
    _id: idInput.value,
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

//Função delete
function deleteFilme(listItem){
  const id = listItem.getAttribute("data-id");
  axios.delete(`http://localhost:4040/filmes/${id}`).then((res) => {
    if(res.status == 200){
      alert("Filme deletado")
    }
  }).catch((err) => {
    console.log(err);
  })
}

