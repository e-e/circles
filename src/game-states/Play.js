import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import Player from '../Player';
import Enemy from '../Enemy';

let entities = [];
let player;

const rand_btw = (min, max) => {
  return Math.floor(Math.random() * Math.abs(max - min)) + min;
};

function collide(player, entity) {
  if (player.body.radius > entity.body.radius) {
    entity.kill();
    this.entity.dead = true;
    this.player.setRadius(player.body.radius + entity.body.radius * 0.2);
  } else {
    player.kill();
    this.game.state.start('lose');
  }
}
function randomEnemy(game) {
  return new Enemy(game, {
    vx: rand_btw(-100, 100),
    vy: rand_btw(-100, 100),
    px: rand_btw(0, game.width),
    py: rand_btw(0, game.height),
    radius: rand_btw(Enemy.MIN_R, Enemy.MAX_R),
    collideWorldBounds: true
  });
}
function initEnemies(game) {
  entities = [];
  for (let i = 0; i < 10; i++) {
    let circle = randomEnemy(game);
    entities.push(circle);
  }
}

export const Play = game => {
  return {
    preload() {},
    create() {
      game.physics.startSystem(Phaser.Physics.ARCADE);
      player = new Player(game, {
        vx: 0,
        vy: 0,
        px: rand_btw(0, game.width),
        py: rand_btw(0, game.height),
        radius: 20,
        collideWorldBounds: true
      });
      initEnemies(game);
    },
    update() {
      let _entities = [];
      for (let i = 0; i < entities.length; i++) {
        game.physics.arcade.overlap(
          player.sprite,
          entities[i].sprite,
          collide,
          null,
          { player, entity: entities[i], game: game }
        );
        if (!entities[i].dead) {
          _entities.push(entities[i]);
        }
      }
      entities = _entities;

      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        player.sprite.x -= 5;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        player.sprite.x += 5;
      }
      if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        player.sprite.y -= 5;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        player.sprite.y += 5;
      }

      if (!entities.length) {
        game.state.start('win');
      }

      if (Math.random() < 0.01) {
        entities.push(randomEnemy(game));
      }
    },
    render() {
      // for (let i = 0; i < entities.length; i++) {
      //   game.debug.body(entities[i].sprite);
      // }
    }
  };
};
