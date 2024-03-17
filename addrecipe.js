'strict mode'

//kom me bo qe vec ka ni input mu kon visible at a time, edhe cdo sen qe bohet submit me 
//dal posht ne faqe

// let nameRecipeEl = document.getElementsByName('name-recipe')
// const ingredientsRecipeEl = document.getElementById('ingredients-checkbox')
// const instructionRecipeEl = document.getElementsByName('instruction-recipe')
// const videoRecipeEl = document.getElementsByName('video-recipe')
let titleRecipeInput = document.getElementById('new-recipe-input')

let el;
let userInput;

function displayInput() {
  el = document.getElementById("titulli");
  // el = document.createElement("h1")
  // displayRecipeDiv.appendChild(el)
  el.innerHTML = titleRecipeInput.value
  titleRecipeInput.value = "";
}

const nameRecipeSubmit = document.getElementById('title-recipe-submit')

nameRecipeSubmit.addEventListener('click', displayInput)

let recipeIngredients = document.getElementsByClassName("checkbox-input")
let listOfIngredientsEL = document.getElementById('list-of-ingredients')

function displayIngredients() {
  // el = document.createElement('p')
  // displayRecipeDiv.appendChild(el)
  // el = document.createElement('li')
  // listOfIngredientsEL.appendChild(el)

  listOfIngredientsEL.innerHTML = ''
  for (let i = 0; i < recipeIngredients.length; i++) {
    if (recipeIngredients[i].checked) {
      listOfIngredientsEL.innerHTML += "<li>" + recipeIngredients[i].value + "</li>"
    }
  }
}

const newRecipeSubmitBtn = document.getElementById("ingredients-submit-btn")

newRecipeSubmitBtn.addEventListener('click', displayIngredients)

let instructionsInput = document.getElementById('new-recipe-instructions-input')

function displayInstructions() {
  el = document.getElementById("instructions-display")
  el.innerHTML = instructionsInput.value
  // instructionsInput.value = "";
}

const displayInstructionsBtn = document.getElementById("instruction-submit-btn")

displayInstructionsBtn.addEventListener("click", displayInstructions)

let displayVideoEl = document.getElementById('display-video')
let newInputVideo = document.getElementById('new-recipe-input-video')

function displayVideo() {
  let newVideo = URL.createObjectURL(newInputVideo.files[0]);
  displayVideoEl.style.display = 'block'
  displayVideoEl.src = newVideo
}

const videoSubmitBtn = document.getElementById("video-submit-btn")

videoSubmitBtn.addEventListener("click", displayVideo)


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

// if (avaliableKeyWords[1].includes(input)) {
//   result.push(avaliableKeyWords[1])
// }

// for (let i = 0; i < avaliableKeyWords.length; i++) {
//   if (avaliableKeyWords[i].toLowerCase().includes(input.toLowerCase())) {
//     result.push(avaliableKeyWords[i])
//   }
// }