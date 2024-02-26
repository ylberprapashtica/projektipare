
window.addEventListener('load', () => {
  let form = document.querySelector("#new-task-form");
  let input = document.querySelector("#new-task-input");
  let list_el = document.querySelector("#tasks");

  addSlideNumber()
  calcAndDisplayActiveSlide(activeSlideIndex);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please fill out the task");
      return;
    }

    let task_el = createTaskEl();

    let task_content_el = createTaskContentEl();

    task_el.appendChild(task_content_el);

    let task_input_el = createTaskInputElement(task);

    task_content_el.appendChild(task_input_el);

    let task_actions_el = createTaskActionEl();

    let task_edit_el = createTaskEditEl();

    let task_delete_el = createDeleteEl();

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });
  });
});

function createTaskInputElement(task) {
  let task_input_el = document.createElement('input');
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  return task_input_el;
}

function createTaskEl() {
  let task_el = document.createElement("div");
  task_el.classList.add("task");

  return task_el
}

function createTaskContentEl() {
  let task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  return task_content_el
}

function createTaskActionEl() {
  let task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  return task_actions_el
}

function createTaskEditEl() {
  let task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerHTML = "Edit";

  return task_edit_el
}

function createDeleteEl() {
  let task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerHTML = "Delete";

  return task_delete_el
}

let activeSlideIndex = 1;
// eshte tu u kriju ni array me qeto elemente, it could have a more descriptive name
let slides = document.getElementsByClassName("my-slides");
let totalSlidesOfSlider = slides.length

//changeNumber is the number of slides it will go forward or backward
function changeCurrentSlideByNumber(changeNumber) {
  calcAndDisplayActiveSlide((activeSlideIndex += changeNumber));
}

function calcAndDisplayActiveSlide(currentSlideNumber) {
  calcActiveSlide(currentSlideNumber)
  displayActiveSlide()
}

function calcActiveSlide(currentSlideNumber) {
  if (currentSlideNumber > totalSlidesOfSlider) {
    activeSlideIndex = 1;
  } else if (currentSlideNumber < 1) {
    activeSlideIndex = totalSlidesOfSlider;
  }
}

function displayActiveSlide() {
  for (let i = 0; i < totalSlidesOfSlider; i++) {
    slides[i].style.display = "none";
  }
  slides[activeSlideIndex - 1].style.display = "block";
}

function addSlideNumber() {
  for (let i = 0; i < totalSlidesOfSlider; i++) {
    let sliderNumberEl = document.createElement('div');
    sliderNumberEl.classList.add("number-text");
    sliderNumberEl.innerHTML = i + 1 + "/" + totalSlidesOfSlider
    slides[i].appendChild(sliderNumberEl)
  }
}