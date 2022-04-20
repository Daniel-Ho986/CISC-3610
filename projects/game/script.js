/** Assets
 * Background / Theme (Sky Blue)
 * Sound effects
 *      Damage
 *      Game Over
 *      Item Collect
 * Music
 *      Game 
 * Platforms
 * Player
 * Enemies
 * Fruits
*/

// Game Variables
let scoreText, livesText;
let player, fruits, pelt, cursors;

let score = 0, maxScore = 0, lives = 3;

let timer = 0;

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
        this.left = this.add.image(295, 145, 'left');
        this.left.setScale(0.2);

        this.right = this.add.image(300, 220, 'right');
        this.right.setScale(0.2);

        this.up = this.add.image(297, 295, 'up');
        this.up.setScale(0.2);

        this.down = this.add.image(297, 370, 'up');
        this.down.setScale(0.2);
        this.down.angle = 180;

        this.add.text(300, 30, 'Controls', {
            fontSize: '38px',
            color: '#000000',
            fontStyle: 'bold',
            align: 'center'
        });

        this.add.text(395, 135, 'Move left', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(395, 210, 'Move right', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(395, 285, 'Jump', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(395, 360, 'Down', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(315, 435, 'N - New Game', {
            fontSize: '18px',
            color: '#000000',
            fontStyle: 'bold',
        });

        this.add.text(315, 485, 'Q - Quit Game', {
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
 * GameOver Scene
 */
 var GameOverScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameOverScene ()
    {
        Phaser.Scene.call(this, { key: 'gameoverScene' });
    },

    preload: function ()
    {
        this.load.image('background', 'assets/images/black_screen.jpg');

        this.load.audio('gameover', 'assets/audio/gameover.wav');
    },

    create: function ()
    {
        this.sound.play('gameover');

        this.background = this.add.image(300, 300, 'background');

        this.add.text(275, 120, `Game Over!`,{
            fontSize: '40px',
            color: '#FF0000',
            fontStyle: 'bold',
        });

        this.add.text(230, 200, `Final Score: ${score}`, {
            fontSize: '22px',
            color: '#ffff00',
            fontStyle: 'bold',
        });

        this.add.text(230, 275, `Don't give up, \n\nCuppy is still hungry!`, {
            fontSize: '22px',
            color: '#ffffff',
            fontStyle: 'bold',
        });

        this.add.text(315, 400, 'N - New Game', {
            fontSize: '20px',
            color: '#ffffff',
            fontStyle: 'bold',
        });

        this.add.text(315, 450, 'Q - Quit', {
            fontSize: '20px',
            color: '#ffffff',
            fontStyle: 'bold',
        });
      
        maxScore = Math.max(maxScore, score);
    
        this.newGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.quit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    
        lives = 3;
        score = 0;
    },

    update: function ()
    {
        if (this.newGame.isDown) {
            this.newGame.isDown = false;
            this.scene.stop();
            this.scene.start('gameScene');
          }
      
          if (this.quit.isDown) {
            this.quit.isDown = false;
            this.scene.stop();
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
        this.load.image('tiles', 'assets/tilemaps/tiles_spritesheet.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');

        this.load.spritesheet('player', 'assets/images/Player/player-spritesheet.png',{
            frameWidth: 566,
            frameHeight: 556,
            frame: 8,
        });

        this.load.spritesheet('enemy', 'assets/images/Enemy/enemy-spritesheet.png', {
            frameWidth: 600,
            frameHeight: 500,
            frame: 2,
        });

        this.load.image('banana', 'assets/images/Fruits/banana.png');
        this.load.image('orange', 'assets/images/Fruits/orange.png');
        this.load.image('pear', 'assets/images/Fruits/pear.png');
        this.load.image('strawberry', 'assets/images/Fruits/strawberry.png');
        this.load.image('watermelon', 'assets/images/Fruits/watermelon.png');

        // load audio
        this.load.audio('game_music', 'assets/audio/game_music.ogg');
        this.load.audio('hit', 'assets/audio/hit.wav');
        this.load.audio('collect', 'assets/audio/collect.wav');
    },

    create: function ()
    {
        // set up
        var backgroundMusic = this.sound.add('game_music');
        backgroundMusic.setLoop(true);
        backgroundMusic.play();

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
        this.player.body.gravity.y = 350;
 
        this.anims.create({
            key: 'player_walk',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1,
        });

        // Set up for enemy
        const x = this.player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400);

        this.pelt = this.physics.add.sprite(x, Phaser.Math.Between(50, game.config.height - 50), 'enemy');

        this.pelt.setScale(0.06);
        this.pelt.setCollideWorldBounds(true);
        this.pelt.setBounce(1);
        this.pelt.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.pelt.allowGravity = false;
        // this.pelt.flipX = true;

        this.anims.create({
            key: 'enemy_fly',
            frames: this.anims.generateFrameNumbers('enemy', {start: 0, end: 1}),
            frameRate: 7,
            repeat: -1,
        });

        this.pelt.anims.play('enemy_fly', true);

        
        let items = ['banana', 'strawberry', 'watermelon', 'orange', 'pear'];

        // Creating a group of one specific fruit per game
        fruits = this.physics.add.group({
            key: items[Phaser.Math.Between(0, 4)],
            setScale: {x: 0.1, y: 0.1},
            setXY: {x: Phaser.Math.Between(20, game.config.width - 20), y: Phaser.Math.Between(50, game.config.height - 50)},
        });

        // Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, fruits, this.collectFruit, null, this);

        // Checks to see if the player collides with any enemy, if he does call the hitEnemy function
        this.physics.add.collider(this.player, this.pelt, this.hitEnemy, null, this);

        // Collide the player with the platforms
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.pelt, platforms); 
        this.physics.add.collider(fruits, platforms); 

        // The score
        scoreText = this.add.text(16, 16, `Score: ${score}`, {
            fontSize: '18px',
            fill: '#000000'
        });

        // The lives
        livesText = this.add.text(16, 48, `Lives: ${lives}`, {
            fontSize: '18px',
            fill: '#000000'
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.newGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.quit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

    },

    update: function ()
    {
        console.log(timer);
        timer++;

        //  Restart game
        if (this.newGame.isDown) {
            console.log('New Game');

            game.sound.stopAll();


            this.scene.stop();
            this.scene.start('gameScene');
            
            score = 0;
            lives = 3;
        
        // Quit game
        }  else if (this.quit.isDown) {
            console.log('Quit Game, Back to Intro');

            game.sound.stopAll();

            this.scene.stop();
            this.scene.start('introScene');

            score = 0;
            lives = 3;
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
            this.player.setVelocityY(-380);

        } else if (this.cursors.down.isDown && !this.player.body.onFloor()) {
            this.player.setVelocityY(300);
        }

        if (this.pelt.body.velocity.x > 0) {
            this.pelt.flipX = true;

        } else if (this.pelt.body.velocityx <= 0) {
            this.pelt.flipX = false;
        }

        // temp timer for enemy appearing
        if (timer > 700) {
            this.createEnemy(this.player, this.platforms);
            timer = 0;
        }

    },

    createEnemy: function(player, platforms) {
        // Set up for enemy
        const x = this.player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400);

        this.pelt = this.physics.add.sprite(x, Phaser.Math.Between(50, game.config.height - 50), 'enemy');

        this.pelt.setScale(0.06);
        this.pelt.setCollideWorldBounds(true);
        this.pelt.setBounce(1);
        this.pelt.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.pelt.allowGravity = false;
        // this.pelt.flipX = true;

        this.physics.add.collider(this.pelt, platforms); 

        this.pelt.anims.play('enemy_fly', true);

        // Checks to see if the player collides with any enemy, if he does call the hitEnemy function
        this.physics.add.collider(this.player, this.pelt, this.hitEnemy, null, this);
    },

    hitEnemy: function(player, enemy) {
        enemy.disableBody(true, true);
        lives--;

        livesText.setText(`Lives: ${lives}`);

        if (lives === 0) {
            game.sound.stopAll();
            this.physics.pause();

            this.scene.stop();
            this.scene.start('gameoverScene');
            
            } else {

            this.sound.play('hit');
        }
    },
    
    collectFruit: function (player, fruit) {
        fruit.disableBody(true, true);
    
        // Add and update the score
        score += 10;
        scoreText.setText(`Score: ${score}`);
    
        maxScore = Math.max(maxScore, score);
    
        this.sound.play('collect');
    
        if (fruits.countActive(true) === 0) {
            fruits.children.iterate(function (child) {
                child.enableBody(true, Phaser.Math.Between(20, game.config.width - 20), Phaser.Math.Between(50, game.config.height - 50), true, true);
              });
        }

    },

});


// This object contains all the Phaser configurations to load our game
var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: [IntroScene, GameScene, HelpScene, GameOverScene],
    backgroundColor: '#87ceeb',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y : 350 },
            debug: false
        },
    }
}

const game = new Phaser.Game(config);