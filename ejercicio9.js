async function showGithubPersonal(){
  // Fetch devuelve una promesa
  let response = await fetch('https://api.github.com/users/AngelMJ10/repos')
  //json () retorna una promesa
  let listaRepos = await response.json();
  console.log(listaRepos);
}

// showGithubPersonal();

function getRepos() {
  fetch('https://api.github.com/users/AngelMJ10/repos')
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos)
  })
}

getRepos();