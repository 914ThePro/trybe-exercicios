// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const jokeContainer = document.getElementById('jokeContainer');
  const specifications = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, specifications)
    .then(r => r.json())
    .then(r => jokeContainer.innerText = r.joke);
  

};

window.onload = () => fetchJoke();