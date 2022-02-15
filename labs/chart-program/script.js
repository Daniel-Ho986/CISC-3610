var fruit = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 3, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 8, color: "purple"}
]

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

function draw() {
    let barPosition = 0;  
    let labelPosition = 20;

    ctx.font= "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Daniel Ho", 140, 20);

    // Loop through the array
    // Call drawBar() function to draw each one
    for (let obj of fruit) {
        drawBar(ctx, obj.name, obj.quantity, obj.color, barPosition, labelPosition);
        barPosition += 60;
        labelPosition += 60;
    } 
}


function drawBar(ctx, name, quantity, color, barPosition, labelPosition) {
    // Draw Bar
    ctx.fillStyle = color;
    ctx.fillRect(barPosition, canvas.height - quantity * 15, 60, quantity * 15);

    // Write Label
    ctx.font= "bold 12px Arial";
    ctx.fillStyle = "black";
    var line = 7;
    var height = 38.5;
    ctx.fillText(quantity, labelPosition, height * line);
    line += 0.5;
    ctx.fillText(name, labelPosition - 10, height * line);
}
