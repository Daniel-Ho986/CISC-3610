// This object contains all the Phaser configurations to load our game
const CONFIG = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload,
        create,
        update,
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        },
    }
}

// Create the game instance
const GAME = new Phaser.Game(CONFIG);

function preload() {

}

function create() {
    
} 