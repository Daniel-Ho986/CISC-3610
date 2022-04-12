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

let player, cursors;

// This object contains all the Phaser configurations to load our game
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    backgroundColor: '#a4dbe8',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y : 300 },
            debug: false
        },
    }
}

const game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet('player', 'assets/images/Player/player-spritesheet.png',{
        frameWidth: 566,
        frameHeight: 555,
        frame: 8,
    });

    // this.load.image('player', 'assets/images/Player/player-spritesheet.png', { frameWidth: 566, frameHeight: 555});

}

function create() {
    this.player = this.physics.add.sprite(config.width / 2 - 50, config.height / 2, 'player');
    this.player.setScale(0.1);

    this.anims.create({
        key: "player_walk",
        frames: this.anims.generateFrameNumbers("player", {start: 0, end: 7}),
        frameRate: 10,
        repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();

    // this.player.flipX = true;
    this.player.play("player_walk");
    

}

function update() {

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play("player_walk", true);

    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        // player.flipX = true;
        player.anims.play("player_walk", true);
    }
}