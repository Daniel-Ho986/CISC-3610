"use strict";

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined,
};

Scene.start = function() {
    // Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    Scene.sprite = bird;

    // Attach the image to be used for the sprite
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    // Wait till the bird image is loaded before starting the animation
    Scene.sprite.img.onload = function() {
        Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
        Scene.mainLoop();
    }
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene
document.addEventListener('DOMContentLoaded', Scene.start);

Scene.clearCanvas = function() {
    // Scene.canvasContext.fillStyle = "#fff";
    // Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

    // Animate at 24 frames a second
    window.setTimeout(Scene.mainLoop, 1000 / 18);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset += 24;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(
        Scene.sprite.img, // image
        Scene.sprite.frames[Scene.sprite.frame].frame.x, // x coordinate to start clipping
        Scene.sprite.frames[Scene.sprite.frame].frame.y, // y coordinate to start clipping
        Scene.sprite.frames[Scene.sprite.frame].frame.w, // width of the clipped image
        Scene.sprite.frames[Scene.sprite.frame].frame.h, // height of clipped image
        Scene.sprite.offset,                             // x coordinate to place the image
        15,                                               // y coordinate to place the image
        Scene.sprite.frames[Scene.sprite.frame].frame.w - 70, // width of the image
        Scene.sprite.frames[Scene.sprite.frame].frame.h - 80 // height of the image
    );
	
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite.frame==Scene.sprite.frames.length)
		Scene.sprite.frame=0;

    // display speech bubble if certain time reach with while loop
    // draw Image bubble
    // continue to draw the bubble until the convo time ends
    Scene.canvasContext.drawImage();
};