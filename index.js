var button = document.querySelector('#btn');
var textArea = document.querySelector('#input-txt');
var outputDiv = document.querySelector('.output-container');

var url = "https://api.funtranslations.com/translate/minion.json";

button.addEventListener("click", clickHandler);

function URLConstructor(text) {
    return url + "?" + "text=" + text;
}

function clickHandler() {
    var inputTxt = textArea.value;
    fetch(URLConstructor(inputTxt))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated);
}