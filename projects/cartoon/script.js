var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var grassPosition = 0;
var mountainPosition = 0;
var cloudPosition = 0;

function draw() {
    ctx.fillStyle = "#6f4e37";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Call drawMountain() to draw 2 mountain
    for (let i = 0; i < 2; i++) {
        drawMountain(ctx, mountainPosition);
        mountainPosition += 350;
    }

        ctx.beginPath();
        ctx.arc(675, 70, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#fefe22";
        ctx.fill();
        ctx.closePath();

    // Call drawCloud() to draw 2 cloud
    for (let i = 0; i < 2; i++) {
        drawCloud(ctx, cloudPosition);
        cloudPosition += 400;
    }
ctx.fillStyle = "#fada5e"
ctx.fillRect(250, 300, 175, 150)

    // Draw triangle
ctx.fillStyle="#A2322E";
ctx.beginPath();
ctx.moveTo(230,300);
ctx.lineTo(445,300);
ctx.lineTo(340,200);
ctx.closePath();
ctx.fill();

//windows
ctx.fillStyle="#663300";
ctx.fillRect(25,40,35,50);
ctx.fillStyle="#0000FF";
ctx.fillRect(27,42,13,23);
ctx.fillRect(43,42,13,23);
ctx.fillRect(43,67,13,21);
ctx.fillRect(27,67,13,21);

//door
ctx.fillStyle = "#754719";
ctx.fillRect(80,53,30,100);

//door knob
ctx.beginPath();
ctx.fillStyle = "#F2F2F2";
ctx.arc(105,75,3,0,2*Math.PI);
ctx.fill();
ctx.closePath();

    

    // Call drawGrass() to draw 40 grass
    for (let i = 0; i < 40; i++) {
        drawGrass(ctx, grassPosition);
        grassPosition += 20;
    }

                
}

// function to draw grass
function drawGrass(ctx, grassPosition) {
    ctx.beginPath();
    ctx.fillStyle = "#3cb043";
    ctx.moveTo(0 + grassPosition, 450);
    ctx.lineTo(30 + grassPosition, 450);
    ctx.lineTo(15 + grassPosition, 415);
    ctx.lineTo(0 + grassPosition, 450);
    ctx.fill();
    ctx.closePath();
}

// function to draw mountain
function drawMountain(ctx, mountainPosition) {
    ctx.beginPath();
    ctx.fillStyle = "#6F7378";
    ctx.moveTo(0 + mountainPosition, 450);  
    ctx.arcTo(175  + mountainPosition, 5, 400 + mountainPosition, 450, 60);
    ctx.lineTo(450 + mountainPosition, 450);   
    ctx.fill();  
    ctx.closePath(); 
}

// function to draw cloud
function drawCloud(ctx, cloudPosition) {
    ctx.beginPath();
    ctx.arc(100 + cloudPosition, 95, 30, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(150 + cloudPosition, 65, 40, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(220 + cloudPosition, 80, 50, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(260 + cloudPosition, 95, 35, Math.PI * 1.5, Math.PI * 0.5);
    ctx.closePath();
    ctx.fillStyle = "rgba(245, 245, 245, 0.95)";
    ctx.fill();
}

function drawHouse(ctx) {

}

// caption text
// tree
// window, door, boat, tent, house, spaceship, etc