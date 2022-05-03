let bear = document.getElementById("bear");
let pig = document.getElementById("pig");
let rabbit = document.getElementById("rabbit");
let raccoon = document.getElementById("raccoon");
let seal = document.getElementById("seal");


var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recognition.lang = 'en-US';
recognition.interimResults = false;
// recognition.maxAlternatives = 5;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const button = document.getElementById("speakButton");

const speakMessage = () => {
    if (button.innerHTML === "Speak") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        recognition.start();
        // Change button value to "Stop" once clicked
        button.innerHTML = "Stop";

    } else if (button.innerHTML === "Stop") {
        recognition.stop();
        button.innerHTML = "Speak";
    }  
}

const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

recognition.onresult = function(event) {
    var message = event.results[0][0].transcript;
    if (message === "bear") {
        ctx.drawImage(bear, 0, 0, 300, 200);

    } else if (message === "pig") {
        ctx.drawImage(pig, 0, 0, 300, 200);

    } else if (message === "rabbit") {
        ctx.drawImage(rabbit, 0, 0, 300, 200);
        
    } else if (message === "raccoon") {
        ctx.drawImage(raccoon, 0, 0, 300, 200);
        
    } else if (message === "seal") {
        ctx.drawImage(seal, 0, 0, 300, 200);
        
    }
    
    else if (message === "help") {
        speak("Say the name of the object to see the object on the screen.");
    } else if (message === "about") {
        speak("Daniel Ho, Copyright 2022.");
    } else {
        // Write unknown on canvas
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('Unknown', 70, 50); 

        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('You said: ' + event.results[0][0].transcript, 70, 110);
    }
    console.log('You said: ', event.results[0][0].transcript);
}

