'strict mode'

//kom me bo qe vec ka ni input mu kon visible at a time, edhe cdo sen qe bohet submit me 
//dal posht ne faqe

// let nameRecipeEl = document.getElementsByName('name-recipe')
// const ingredientsRecipeEl = document.getElementById('ingredients-checkbox')
// const instructionRecipeEl = document.getElementsByName('instruction-recipe')
// const videoRecipeEl = document.getElementsByName('video-recipe')
let titleRecipeInput = document.getElementById('new-recipe-input')
let displayRecipeDiv = document.getElementById('displayRecipe')
let el;
let userInput;

function displayInput() {
  el = document.createElement("h1")
  displayRecipeDiv.appendChild(el)
  el.innerHTML = titleRecipeInput.value

}

let recipeIngredients = document.getElementsByClassName("checkbox-input")

function displayIngredients() {
  el = document.createElement('p')
  displayRecipeDiv.appendChild(el)
  el.innerHTML = recipeIngredients.value
}

let instructionsInput = document.getElementById('new-recipe-instructions-input')

function displayInstructions() {
  el = document.createElement('p')
  displayRecipeDiv.appendChild(el)
  el.innerHTML = instructionsInput.value
}


// titleRecipeSubmit.addEventListener('click', addRecipeName())


// function addRecipeName(text) {
//   let nameRecipeDiv = document.createElement('div')
//   let nameRecipeElH1 = document.createElement('h1');
//   nameRecipeElH1.classList.add("text");
//   nameRecipeElH1.value = text
//   document.body.appendChild(nameRecipeDiv)
//   nameRecipeDiv.appendChild(nameRecipeElH1)
// }


// titleRecipeSubmit.addEventListener('click', newName)