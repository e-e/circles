import Circle from './Circle';

class Enemy extends Circle {
  constructor() {
    super(...arguments);
    this.dead = false;
  }
  initBitmapData() {
    this.bitmap.circle(
      this.attributes.radius,
      this.attributes.radius,
      this.attributes.radius,
      'rgba(200, 0, 0, 0.5)'
    );
    this.bitmap.shadow('rgba(255,255,255,0.3)', 10, 3, 3);
  }
}
Enemy.ATTRIBUTES = {
  radius: 100,
  color: 0xff0000,
  vx: 0,
  vy: 0,
  px: 0,
  py: 0,
  gy: 0,
  gx: 0,
  bounce: 1,
  collideWorldBounds: false,
  isPlayer: false
};
Enemy.MAX_R = 25;
Enemy.MIN_R = 5;
export default Enemy;
