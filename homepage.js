
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
    // if (input.length) {
    //     result = availableKeywords.filter((keyword) => {
    //         return keyword.toLowerCase().includes(input.toLowerCase());
    // });
    debugger;
    let nisja = 0
    if (input != "") {
        while (nisja < availableKeywords.length) {
            if (availableKeywords[nisja].toLowerCase().includes(input.toLowerCase())) {
                result.push(availableKeywords[nisja]);
            }
            ++nisja;
        }

        //detyra osht filtroj elementet e array availableKeywords nbaze te kushtit nese elementi permban fjalen qe u shkru ne inputbox
        display(result);
    }

    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}


function display(result) {
    // const content = result.map((list) => {
    //     return "<li onclick=selectInput(this)>" + list + '</li>';
    // });
    let content = [];

    let index = 0;
    while (index < result.length) {
        content.push("<li onclick=selectInput(this)>" + result[index] + '</li>');
        index++
    }

    debugger;
    // for (let index = 0; index < result.length; index++) {
    //     content.push("<li onclick=selectInput(this)>" + availableKeywords[i] + '</li>');
    // }
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}



function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}



