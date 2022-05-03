let bear = document.getElementById("bear");
let pig = document.getElementById("pig");
let rabbit = document.getElementById("rabbit");
let raccoon = document.getElementById("raccoon");
let seal = document.getElementById("seal");


var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.drawImage(bear, 0, 0, 300, 200);
// ctx.clearRect(0, 0, canvas.width, canvas.height);

const button = document.getElementById("speakButton");

const speakMessage = () => {
    if (button.innerHTML == "Speak") {
        recognition.start();
        // Change button value to "Stop" once clicked
        button.innerHTML = "Stop";

    } else if (button.innerHTML == "Stop") {
         recognition.stop();
    }  
}

const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

recognition.onresult = function(event) {
    var message = event.results[0][0].transcript;
    if (message == "bear" || message == "pig" || message == "rabbit" || message == "raccoon" || message == "seal") {

    } else if (message == "help") {
        speak("");
    } else if (message == "about") {
        speak("");
    } else {
        // Write unknown on canvas
    }
    console.log('You said: ', event.results[0][0].transcript);
}

