import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

export const Menu = game => {
  return {
    preload() {
      game.load.audio('amy-poof', ['assets/sound/amy-poof-hi.mp3']);
    },
    create() {
      const titleLabel = game.add.text(80, 80, 'Circles', {
        font: '50px Arial',
        fill: '#ffffff'
      });

      const startLabel = game.add.text(
        80,
        game.world.height - 80,
        'press any arrow key to play',
        { font: '25px Arial', fill: '#ffffff' }
      );

      const keys = [
        game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
        game.input.keyboard.addKey(Phaser.Keyboard.UP),
        game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
      ];
      keys.forEach(key => {
        key.onDown.addOnce(this.start, this);
      });
    },
    start() {
      game.state.start('play');
    }
  };
};
