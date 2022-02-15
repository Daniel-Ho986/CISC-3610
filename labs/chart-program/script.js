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
    let position = 0;  

    // Loop through the array
    // Call drawBar() function to draw each one
    for (let obj of fruit) {
        
        drawBar(ctx, obj.name, obj.quantity*8, obj.color, position);
        position += 40;
    } 
}

//set new origin
// or flip sx sy
function drawBar(ctx, name, quantity, color, position) {
    ctx.fillStyle = color;
    ctx.fillRect(position, canvas.height - quantity, 40, quantity)
}
