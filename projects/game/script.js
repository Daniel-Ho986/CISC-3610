/** Assets
 * Background / Theme (Sky Blue)
 * Sound effects
 *      Damage
 *      Game Over
 *      Item Collect
 * Music
 *      Game 
 *      Ending
 * Platforms
 * Player
 * Enemies
 * Fruits
*/

// Game Variables
let scoreText, livesText;
let player, fruits, pelt, cursors;
let groundLeft, groundMid, groundRight;

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
        this.add.text(250, 120, 'Lost in Hunger', {
            fontSize: '40px',
            color: '#ffff00',
            fontStyle: 'bold',
        });

        // Display High Score
        this.add.text(205, 200, `High Score: ${maxScore}`, {
            fontSize: '22px',
            color: '#ff7777',
            fontStyle: 'bold',
        });

        // Help Controls
        this.add.text(690, 20, 'H - Help', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        // Story Introduction
        this.add.text(205, 300, 'Cuppy is starving! \nHelp him eat as many fruits as you can. \n\nBUT WATCH OUT FOR THE PELTS \n...eating them will cost you 1 life.', {
            fontSize: '22px',
            color: '#112233',
            fontStyle: 'bold'
        });

        // Developer
        this.add.text(260, 475, 'By: Daniel Ho', {
            fontSize: '32px',
            color: 'rgba(255, 112, 112, 1)',
            fontStyle: 'bold',
        });

        this.add.sprite(380, 330, 'banana').setAlpha(0.2);

        this.cursors =  this.input.keyboard.createCursorKeys();
        this.help = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

    },
    
    update: function () 
    {
            if (this.cursors.space.isDown) {
                console.log('From Intro to Game');
                this.scene.start('gameScene');
    
            } 
            else if (this.help.isDown) {
                console.log('From Intro to Help');
                this.scene.start('helpScene');
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

        this.add.text(300, 30, 'Controls', {
            fontSize: '38px',
            color: '#000000',
            fontStyle: 'bold',
            align: 'center'
        });

        this.add.text(395, 165, 'Move left', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(395, 240, 'Move right', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(395, 315, 'Jump', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(315, 400, 'N - New Game', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(315, 535, 'C - Close', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.close = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    },

    update: function ()
    {
        if (this.close.isDown) {
            console.log('From Help to Intro');
            this.scene.start('introScene');
        }
    }

});

/**
 * Game Scene
 */
var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'gameScene' });
    },

    preload: function ()
    {
        this.load.spritesheet('player', 'assets/images/Player/player-spritesheet.png',{
            frameWidth: 566,
            frameHeight: 556,
            frame: 8,
        });

        this.load.image('tiles', 'assets/tilemaps/tiles_spritesheet.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');

        // this.load.image('ground_left', 'assets/images/Platforms/grassCliffLeft.png');
        // this.load.image('ground_mid', 'assets/images/Platforms/grassMid.png');
        // this.load.image('ground_right', 'assets/images/Platforms/grassCliffRight.png');
    },

    create: function ()
    {
        // Set up for platforms
        const map = this.make.tilemap({ key: 'map'});

        const tileset = map.addTilesetImage('simple_platformer', 'tiles');

        const platforms = map.createStaticLayer('Platforms', tileset, 0, 96);

        platforms.setScale(0.465, 0.5);
        platforms.setCollisionByExclusion(-1, true);

        // Set up for player
        this.player = this.physics.add.sprite(config.width / 2 - 50, 500, 'player');

        this.player.setScale(0.055);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
 
        this.anims.create({
            key: 'player_walk',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1,
        });

        // Collide the player with the platforms
        this.physics.add.collider(this.player, platforms); 


        this.cursors = this.input.keyboard.createCursorKeys();
        this.newGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.quit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

    },

    update: function ()
    {
        //  Restart game
        if (this.newGame.isDown) {
            console.log('New Game');
            this.scene.stop();
            this.scene.start('gameScene');
        
        // Quit game
        }  else if (this.quit.isDown) {
            console.log('Quit Game, Back to Intro');
            this.scene.start('introScene');
        }
        
        // Player left movement
        if (this.cursors.left.isDown) {
            this.player.anims.play('player_walk', true);
            this.player.setVelocityX(-160);
            this.player.flipX = false;
            
        // Player right movement
        } else if (this.cursors.right.isDown) {
            this.player.anims.play('player_walk', true);
            this.player.setVelocityX(160);
            this.player.flipX = true;

        // Player stop moving
        } else {
            this.player.anims.play('player_walk', false);
            this.player.setVelocityX(0);
        }
        
        // Player Jump 
        if (this.cursors.up.isDown && this.player.body.onFloor()) {
            this.player.setVelocityY(-330);
        }
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
            gravity: { y : 350 },
            debug: false
        },
    }
}

const game = new Phaser.Game(config);