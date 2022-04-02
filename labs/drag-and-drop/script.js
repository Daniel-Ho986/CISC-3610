let sprites = ['bulbasaur', 'fennekin', 'marill', 'munchlax', 'pachirisu', 'phanpy', 'pikachu', 'totodile', 'ball', 'burger', 'camping', 'pokepuff'];

// This object contains all the Phaser configurations to load our game
const CONFIG = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1000,
    height: 640,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload,
        create,
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
    this.load.image('background', 'assets/images/background.jpg');
    this.load.image('bulbasaur', 'assets/images/bulbasaur.png');

    for (let i = 0; i < sprites.length; i++) {
        this.load.image(sprites[i], `assets/images/${sprites[i]}.png`);
    }
}

function create() {
    // Set up background
    let background = this.add.sprite(400, 0, 'background');
    background.setScale(1.1, 1);

    let bulbasaur = this.add.sprite(850, 50, 'bulbasaur');
    bulbasaur.setScale(0.07, 0.07);
    bulbasaur.setInteractive();
    this.input.setDraggable(bulbasaur);

    let fennekin = this.add.sprite(850, 160, 'fennekin');
    fennekin.setScale(0.07, 0.07);
    fennekin.setInteractive();
    this.input.setDraggable(fennekin);

    let marill = this.add.sprite(850, 270, 'marill');
    marill.setScale(0.07, 0.07);
    marill.setInteractive();
    this.input.setDraggable(marill);

    let munchlax = this.add.sprite(850, 380, 'munchlax');
    munchlax.setScale(0.04, 0.04);
    munchlax.setInteractive();
    this.input.setDraggable(munchlax);

    let pachirisu = this.add.sprite(850, 490, 'pachirisu');
    pachirisu.setScale(0.04, 0.04);
    pachirisu.setInteractive();
    this.input.setDraggable(pachirisu);

    let phanpy = this.add.sprite(850, 600, 'phanpy');
    phanpy.setScale(0.07, 0.07);
    phanpy.setInteractive();
    this.input.setDraggable(phanpy);

    let pikachu = this.add.sprite(950, 50, 'pikachu');
    pikachu.setScale(0.15, 0.15);
    pikachu.setInteractive();
    this.input.setDraggable(pikachu);

    let ball = this.add.sprite(950, 160, 'ball');
    ball.setScale(0.03, 0.03);
    ball.setInteractive();
    this.input.setDraggable(ball);
    
    let burger = this.add.sprite(950, 270, 'burger');
    burger.setScale(0.08, 0.08);
    burger.setInteractive();
    this.input.setDraggable(burger);
    
    let pokepuff = this.add.sprite(950, 380, 'pokepuff');
    pokepuff.setScale(0.3, 0.3);
    pokepuff.setInteractive();
    this.input.setDraggable(pokepuff);
    
    let camping = this.add.sprite(950, 490, 'camping');
    camping.setScale(0.15, 0.15);
    camping.setInteractive();
    this.input.setDraggable(camping);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    })

} 

