var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var grassPosition = 0;
var mountainPosition = 0;
var cloudPosition = 0;
var treePosition = 0;

function draw() {
    // Call drawGround() to draw ground
    drawGround(ctx);    

    // Call drawMountain() to draw 2 mountain
    for (let i = 0; i < 2; i++) {
        drawMountain(ctx, mountainPosition);
        mountainPosition += 350;
    }

    // Call drawSun() to draw a sun
    drawSun(ctx);

    // Call drawCloud() to draw 2 cloud
    for (let i = 0; i < 2; i++) {
        drawCloud(ctx, cloudPosition);
        cloudPosition += 400;
    }

    // Call drawTree() to draw 2 trees
    for (let i = 0; i < 2; i++) {
        drawTree(ctx, treePosition);
        treePosition += 600;
    }
    
    // Call drawHouse() to draw a house
    drawHouse(ctx);

    // Call drawGrass() to draw 40 grass
    for (let i = 0; i < 40; i++) {
        drawGrass(ctx, grassPosition);
        grassPosition += 20;
    }          

    // Canvas Text
    ctx.fillStyle = "#000000"
    ctx.font = "25px Arial";
    ctx.fillText("Welcome to my house!", 10, 30);
}

// function to draw ground
function drawGround(ctx) {
    ctx.fillStyle = "#6f4e37";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
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

// function to draw house
function drawHouse(ctx) {
    // House main building
    ctx.fillStyle = "#fcf75e"
    ctx.fillRect(250, 300, 175, 150)

    // House side building
    ctx.fillStyle = "#ffff66";
    ctx.fillRect(425, 305, 155, 140);

    // House roof
    ctx.fillStyle="#A2322E";
    ctx.beginPath();
    ctx.moveTo(230,300);
    ctx.lineTo(445,300);
    ctx.lineTo(340,200);
    ctx.closePath();
    ctx.fill();

    // House door
    ctx.fillStyle = "#754719";
    ctx.fillRect(315, 350, 50, 100);
    ctx.beginPath();
    ctx.fillStyle = "#F2F2F2";
    ctx.arc(355, 400, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // House window
    ctx.fillStyle="#c0c0c0";
    ctx.fillRect(475, 345, 50, 50);
    ctx.fillStyle="#add8e6";
    ctx.fillRect(479, 348, 19, 22);
    ctx.fillRect(502, 348, 19, 22);
    ctx.fillRect(502, 371, 19, 22);
    ctx.fillRect(479, 371, 19, 22);
}

// function to draw tree
function drawTree(ctx, treePosition) {
    ctx.fillStyle = "#8b5a2b";
    ctx.fillRect(75 + treePosition, 320, 27, 130);

    ctx.beginPath();
    ctx.fillStyle = "#2a9e00";
    ctx.arc(88 + treePosition, 300, 43, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

// function to draw sun
function drawSun(ctx) {
    ctx.beginPath();
    ctx.arc(675, 70, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#fefe22";
    ctx.fill();
    ctx.closePath();
}
