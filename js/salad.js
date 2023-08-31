

const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

const maxIngredients = 5;

const saladIngredientsList = document.getElementById("salad-ingredients");
const saladFinalList = document.getElementById("salad-final");
const saladCount = document.getElementById("salad-count");

// Création de la liste des ingrédients disponibles
ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("ingredient");
  li.addEventListener("click", () => addIngredientToSalad(ingredient));
  saladIngredientsList.appendChild(li);
});

const salad = [];

function updateSalad() {
  saladFinalList.innerHTML = "";
  saladCount.textContent = salad.length;
  salad.forEach(ingredient => {
    const liItem = document.createElement("li");
    liItem.textContent = ingredient;
    liItem.classList.add("salad-ingredient");
    liItem.addEventListener("click", () => removeIngredientFromSalad(ingredient));
    saladFinalList.appendChild(liItem);
  });
}

function addIngredientToSalad(ingredient) {
  if (salad.length < 5) {
    salad.push(ingredient);
    updateSalad();
  }
}

function removeIngredientFromSalad(ingredient) {
  const index = salad.indexOf(ingredient);
  if (index !== -1) {
    salad.splice(index, 1);
    updateSalad();
  }
}

updateSalad();




// ...

// Ajouter un ingrédient à la salade
function addToSalad(ingredient) {
  if (salad.length < maxIngredients) {
    salad.push(ingredient);
    updateSalad();
    updateIngredients();
    updateMessage("");
  } else {
    return alert("Vous ne pouvez plus ajouter d'ingrédients à votre salade!");
  }
}


