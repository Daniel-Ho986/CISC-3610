let player, ball, violetBricks, yellowBricks, redBricks, cursors;

// This object contains all the Phaser configurations to load our game
const config ={
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
};

// Create the game instance
const game = new Phaser.Game(config);

function preload() {
    this.load.image('ball', 'assets/images/ball_32_32.png');
    this.load.image('paddle', 'assets/images/paddle_128_32.png');
    this.load.image('brick1', 'assets/images/brick1_64_32.png');
    this.load.image('brick2', 'assets/images/brick2_64_32.png');
    this.load.image('brick3', 'assets/images/brick3_64_32.png');
}

function create() {
    ball = this.physics.add.sprite(
        400, // x position
        565, // y position
        'ball' // key of image for the sprite
    );
    player = this.physics.add.sprite(
        400, // x position
        600, //y position
        'paddle', // Key of image for the sprite
    );

    // Add violet bricks
    violetBricks = this.physics.add.group({
        key: 'brick1',
        repeat: 9,
        setXY: {
            x: 80,
            y: 140,
            stepX: 70
        }
    });

    // Add yellow bricks
    yellowBricks = this.physics.add.group({
    key: 'brick2',
    repeat: 9,
    setXY: {
      x: 80,
      y: 90,
      stepX: 70
    }
  });
  
  // Add red bricks
  redBricks = this.physics.add.group({
    key: 'brick3',
    repeat: 9,
    setXY: {
      x: 80,
      y: 40,
      stepX: 70
    }
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Check if the ball left the scene i.e gameover
    if (!isGameOver(this.physics.world)) {
        // Show "Game Over" message to the player
    }  else if (isWon()) {
        // Show "You won!" message to the player
    } else {
        // Logic for regular game time
        // Put this in so that the player stays still if no key is being pressed
        player.body.setVelocityX(0);

        if (cursors.left.isDown) {
            player.body.setVelocityX(-350);
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(350);
        }
    }
}

// Other functions
function isGameOver(world) {
    return ball.body.y > world.bounds.height;
}

function isWon() {
    return violetBricks.countActive() + yellowBricks.countActive() + redBricks.countActive() == 0;
}