const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se corrigió la sintaxis para seleccionar la clase utilizando query selector
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); // En el html creamos el elemento p con class location que está seleccionando

async function displayUser(username) { // Se agregó la palabra clave async
  $n.textContent = 'cargando...';

  const response = await fetch(`${usersEndpoint}/${username}`); // se agregó la la palabra clave await
  const data = await response.json(); // declaramos la variable data y la convertimos en un objeto de js

  console.log(response);
  $n.textContent = `${data.name}`; //Se colocaron las backticks
  $b.textContent = `${data.blog}`; //Se colocaron las backticks
  $l.textContent = `${data.location}`; //Se colocaron las backticks
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);