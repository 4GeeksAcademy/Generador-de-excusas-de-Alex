import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ['The neighbor’s llama', 'A drunk unicorn', 'A time traveler', 'An alien', 'Pikachu', 'A ninja turtle'];
  let action = ['ate', 'hacked', 'exploded', 'teleported', 'cloned'];
  let what = ['the internet', 'my alarm clock', 'reality itself'];
  let when = [
    'during a full moon',
    'while I was saving the world',
    'right before the apocalypse',
    'in another timeline',
    'while I was praying',
    'during a forbidden ritual',
    'while reality was loading',
    'yesterday and tomorrow'
  ];

 function generateExcuse() {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    let excuse =
      who[whoIndex] + " " +
      action[actionIndex] + " " +
      what[whatIndex] + " " +
      when[whenIndex];

    document.getElementById("excuse").innerHTML = excuse;
  }

  // Genera una excusa al cargar la página
  generateExcuse();

  // Conecta el botón
  let button = document.getElementById("btn");
  button.addEventListener("click", generateExcuse);

  console.log("Hello Rigo from the console!");
};
