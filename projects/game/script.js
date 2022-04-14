/** Assets
 * Background / Theme (Light Blue)
 * Sound effects
 *      Damage
 *      Game Over
 *      Item Collect
 * Music
 * Platforms
 * Player
 * Enemies
 * Fruits
*/

// Game Variables
let scoreText, livesText;
let player, fruits, pelt, platform, cursors;

let score = 0, maxScore = 0, lives = 3;

/**
 * Intro Scene
 */
var IntroScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function IntroScene ()
    {
        Phaser.Scene.call(this, { key: 'introScene' });
    },

    preload: function ()
    {
        this.load.image('banana', 'assets/images/Fruits/banana.png');
    },

    create: function ()
    {
        // Welcome message
        this.add.text(250, 120, "Lost in Hunger", {
            fontSize: "40px",
            color: "#ffff00",
            fontStyle: "bold",
        });

        // Display High Score
        this.add.text(205, 200, `High Score: ${maxScore}`, {
            fontSize: "22px",
            color: "#ff7777",
            fontStyle: "bold",
        });

        // Help Controls
        this.add.text(690, 20, "H - Help", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        // Story Introduction
        this.add.text(205, 300, "Cuppy is starving! \nHelp him eat as many fruits as you can. \n\nBUT WATCH OUT FOR THE PELTS \n...eating them will cost you 1 life.", {
            fontSize: "22px",
            color: "#112233",
            fontStyle: "bold"
        });

        // Developer
        this.add.text(260, 475, "By: Daniel Ho", {
            fontSize: "32px",
            color: "rgba(255, 112, 112, 1)",
            fontStyle: "bold",
        });

        this.add.sprite(380, 330, 'banana').setAlpha(0.2);

        this.cursors =  this.input.keyboard.createCursorKeys();
        this.help = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    },
    
    update: function () 
    {
            if (this.cursors.space.isDown) {
                console.log("From Intro to Game");
                this.scene.start('gameScene');
    
            } 
            else if (this.help.isDown) {
                console.log("From Intro to Help");
                this.scene.start("helpScene");
            }
    }

});

/**
 * Help Scene
 */
var HelpScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function HelpScene ()
    {
        Phaser.Scene.call(this, { key: 'helpScene' });
    },

    preload: function ()
    {
        this.load.image('left', 'assets/images/Arrows/left.png');
        this.load.image('right', 'assets/images/Arrows/right.png');
        this.load.image('up', 'assets/images/Arrows/up.png');
    },

    create: function ()
    {
        this.left = this.add.image(295, 175, 'left');
        this.left.setScale(0.2);

        this.right = this.add.image(300, 250, 'right');
        this.right.setScale(0.2);

        this.up = this.add.image(295, 325, 'up');
        this.up.setScale(0.2);

        this.add.text(395, 165, "Move left", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        this.add.text(395, 240, "Move right", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        this.add.text(395, 315, "Jump", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        this.add.text(315, 400, "N - New Game", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        this.add.text(315, 435, "C - Close", {
            fontSize: "18px",
            color: "#000000",
            fontStyle: "bold",
        });

        this.close = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.newGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    },

    update: function ()
    {
        if (this.newGame.isDown) {
            console.log("New Game");
            this.scene.stop();
            this.scene.launch('introScene');

        } 
        else if (this.close.isDown) {
            console.log("Resume game");
            this.scene.resume("introScene");
        }
    }

});

var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'gameScene' });
    },

    preload: function ()
    {
        this.load.image('pear', 'assets/images/Fruits/pear.png');
    },

    create: function ()
    {
        this.pear = this.add.sprite(400, 300, 'pear').setOrigin(0, 0.5);

        this.input.once('pointerdown', function (event) {

            console.log('From SceneB to IntroScene');

            this.scene.start('introScene');

        }, this);
    },

    update: function (time, delta)
    {
        this.pear.rotation += 0.01;
    }

});


// This object contains all the Phaser configurations to load our game
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [IntroScene, GameScene, HelpScene],
    backgroundColor: '#87ceeb',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y : 300 },
            debug: false
        },
    }
}

const game = new Phaser.Game(config);

// function preload() {
//     this.load.spritesheet('player', 'assets/images/Player/player-spritesheet.png',{
//         frameWidth: 566,
//         frameHeight: 555,
//         frame: 8,
//     });

//     // this.load.image('player', 'assets/images/Player/player-spritesheet.png', { frameWidth: 566, frameHeight: 555});

// }

// function create() {
//     this.player = this.physics.add.sprite(config.width / 2 - 50, config.height / 2, 'player');
//     this.player.setScale(0.1);

//     this.anims.create({
//         key: "player_walk",
//         frames: this.anims.generateFrameNumbers("player", {start: 0, end: 7}),
//         frameRate: 10,
//         repeat: -1,
//     });

//     cursors = this.input.keyboard.createCursorKeys();

//     // this.player.flipX = true;
//     this.player.play("player_walk");
    

// }

// function update() {

//     if (cursors.left.isDown) {
//         player.setVelocityX(-160);
//         player.anims.play("player_walk", true);

//     } else if (cursors.right.isDown) {
//         player.setVelocityX(160);
//         // player.flipX = true;
//         player.anims.play("player_walk", true);
//     }
// }