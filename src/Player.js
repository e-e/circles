import Circle from './Circle';

class Player extends Circle {
  initBitmapData() {
    this.bitmap.ctx.strokeStyle = 'rgb(255,0,0)';
    // this.bitmap.ctx.lineWidth = 5;
    this.bitmap.circle(
      this.attributes.radius,
      this.attributes.radius,
      this.attributes.radius,
      'rgba(255, 255, 255, 0.5)'
    );
  }
  setRadius(radius) {
    this.attributes.radius = radius;
    this.reInit();
  }
  update() {}
}
Player.ATTRIBUTES = {
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
Player.MAX_R = 100;
Player.MIN_R = 25;
export default Player;
