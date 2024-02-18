
//Search bar with suggestions
let availableKeywords = [
    'Preparing food',
    'Pasta',
    'Macaroni',
    'Meat',
    'Tortelini',
    'Vegetables',
    'Fruits',
    'Cakes',
    'Eggs',
    'Water',
    'Fish',
    'Soy',
    'Sauces',
    'Potatoes',
    'Cheese',
    'Yougurt',
    'Salmon',
    'Berries',
    'Bread',
    'Funghi',
    'Cereals',
    'Olive  Oil',
    'Garlic',
    'Nuts and seeds',
];

const resultsBox = document.querySelector(".result_box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);

    if (!result.length)
        resultsBox.innerHTML = '';
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + '</li>';
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}



