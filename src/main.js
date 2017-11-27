import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

import Enemy from './Enemy';
import Player from './Player';
import { Menu, Play, Win, Lose } from './game-states';

const game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('menu', Menu(game));
game.state.add('play', Play(game));
game.state.add('win', Win(game));
game.state.add('lose', Lose(game));
game.state.start('menu');
