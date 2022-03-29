// Create our only scene caled mainScene, in the script.js file
class mainScene {
    // The three methods are key to how Phaser works
    // preload() → create() → update() → update() → update() → etc.

    preload() {
        // This method is called once at the beginning
        // It will load all the assests, like sprites and sounds
    }

    create() {
        // This method is called once, just after preload()
        // It will initialize our scene, like the positions of the sprites
    }

    update() {
        // This method is called 60 times per second after create()
        // It will handle all the game's logic, like movements
    }
}

new Phaser.Game({
    width: 700, // Width of the game in pixels
    height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // Background color
    scene: mainScene, // The name of the scene we created
    physics: {default: 'arcade'}, // The physics engine to use
    parent: 'game' // Create the game inside the <div id="game">
});