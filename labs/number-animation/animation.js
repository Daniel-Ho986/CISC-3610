"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

var counter = 0;

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the numbers to be displayed.
    Scene.sprite = numbers;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the numbers image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	// Scene.mainLoop();

		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[0].frame.x,
			Scene.sprite.frames[0].frame.y,
			Scene.sprite.frames[0].frame.w,
			Scene.sprite.frames[0].frame.h,
			250,
			100,
			Scene.sprite.frames[0].frame.w,
			Scene.sprite.frames[0].frame.h
		);
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "black";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

	counter++;

	// Animate at 1 frames a second.
	if (counter < 11) {
    	window.setTimeout(Scene.mainLoop, 500);
	}
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	// Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset+=24;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
	if (Scene.sprite.frame < Scene.sprite.frames.length) {
		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[Scene.sprite.frame].frame.x,
			Scene.sprite.frames[Scene.sprite.frame].frame.y,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h,
			250,
			100,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h
		);
	
		// Advance to the next frame.
		Scene.sprite.frame++;
	}

	// At the end of the sprite sheet, start at the 10 frame.
	else {
		Scene.sprite.frame = 1;
		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[Scene.sprite.frame].frame.x,
			Scene.sprite.frames[Scene.sprite.frame].frame.y,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h,
			180,
			100,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h
		);
		Scene.sprite.frame = 0;
		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[Scene.sprite.frame].frame.x,
			Scene.sprite.frames[Scene.sprite.frame].frame.y,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h,
			295,
			100,
			Scene.sprite.frames[Scene.sprite.frame].frame.w,
			Scene.sprite.frames[Scene.sprite.frame].frame.h
		);
	}
};