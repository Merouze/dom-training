/* ------------------------------------ */
/* --- Exercice 1 --- */

const button1 = document.querySelector('#ex1 .button')
const text1 = document.querySelector('#ex1 .text')


document.querySelector("#ex1 .button").addEventListener('click', function () {
  text1.classList.toggle('hidden')
});

/* ------------------------------------ */
/* --- Exercice 2 --- */
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const scrollValueElement = document.getElementById("ex2-scroll-value");
  scrollValueElement.textContent = scrollValue;
});


/* ------------------------------------ */
/* --- Exercice 3 --- */

// Récupérer les éléments du DOM
const ex3Button = document.querySelector("#ex3 .button");
const ex3Animals = document.querySelector("#ex3-animals");

// Attacher un gestionnaire d'événements au clic sur le bouton
ex3Button.addEventListener("click", function () {
  // Déplacer le premier élément en dernier
  const firstAnimal = ex3Animals.querySelector("li");
  ex3Animals.appendChild(firstAnimal);
});


/* ------------------------------------ */
/* --- Exercice 4 --- */

const button = document.querySelector('.ex4 .button');
const colors = ['blue', 'red', 'green'];
let colorIndex = 0;

button.addEventListener('click', function () {
  // Changer la couleur de fond du bouton
  button.style.backgroundColor = colors[colorIndex];

  // Passer à la couleur suivante dans le tableau
  colorIndex = (colorIndex + 1) % colors.length;
});


/* ------------------------------------ */
/* --- Exercice 5 --- */

// Fonction pour générer une couleur RVB aléatoire
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Appliquer la couleur aléatoire au survol pour chaque bouton
const buttons = document.querySelectorAll('#ex5 .button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = getRandomColor();
  });
  button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '';
  });
});


/* ------------------------------------ */
/* --- Exercice 6 --- */
// Obtenez le paragraphe que vous souhaitez animer
const paragraph = document.getElementById("ex6-paragraph");

// Divisez le texte du paragraphe en caractères individuels
const characters = paragraph.textContent.split("");

// Remplacez le contenu du paragraphe par une chaîne vide pour commencer l'animation
paragraph.textContent = "";

// Fonction pour afficher progressivement les caractères
function animateText(index) {
  if (index < characters.length) {
    paragraph.textContent += characters[index];
    setTimeout(function () {
      animateText(index + 1);
    }, 50); // 20 lettres par seconde, donc chaque lettre est affichée après 50 ms
  }

}

// Commencez l'animation en appelant la fonction avec un index initial de 0
animateText(0);



/* ------------------------------------ */
/* --- Exercice 7 --- */


const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse"
];

const addButton = document.getElementById("ex7-button");
const list = document.getElementById("ex7-list");

let availableTasks = [...taskList]; // Copie de la liste originale

function addNextTask() {
  if (availableTasks.length > 0) {
    const task = availableTasks[0];
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.classList.add("task-list-task");
    listItem.addEventListener("click", () => {
      listItem.remove();
      availableTasks.push(task); // Réajoute la tâche à la liste des tâches disponibles
    });
    list.appendChild(listItem);
    availableTasks.shift(); // Retire la tâche ajoutée des tâches disponibles
  }
}

addButton.addEventListener("click", () => {
  addNextTask();
});


/* ------------------------------------ */
/* --- Exercice 8 --- */


const buttonsEx8 = document.querySelectorAll('.button[data-progress-id]');
const progressBars = document.querySelectorAll('.progress-val');

buttonsEx8.forEach(button => {
  button.addEventListener('click', () => {
    const progressId = button.getAttribute('data-progress-id');
    const progressBar = document.getElementById(progressId);
    
    let currentValue = parseInt(progressBar.style.width) || 0;
    currentValue += 5;
    if (currentValue > 100) {
      currentValue = 100;
    }
    
    progressBar.style.width = currentValue + '%';
  });
});
