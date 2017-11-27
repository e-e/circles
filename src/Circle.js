class Circle {
  constructor(game, attributes = {}) {
    this.game = game;
    this.attributes = Object.assign({}, Circle.ATTRIBUTES, attributes);
    this.init();
  }
  init() {
    this.initBitmap();
    this.initBitmapData();
    this.initSprite();
  }
  reInit() {
    this.attributes.px = this.sprite.x;
    this.attributes.py = this.sprite.y;
    this.init();
  }
  initBitmap() {
    this.bitmap = this.game.add.bitmapData(
      this.attributes.radius * 2,
      this.attributes.radius * 2
    );
  }
  initBitmapData() {
    this.bitmap = this.game.add.bitmapData(
      this.attributes.radius * 2,
      this.attributes.radius * 2
    );
    this.bitmap.circle(
      this.attributes.radius,
      this.attributes.radius,
      this.attributes.radius,
      'rgba(200, 0, 0, 0.5)'
    );
  }
  initSprite() {
    if (this.sprite) this.sprite.kill();
    this.sprite = this.game.add.sprite(
      this.attributes.px,
      this.attributes.py,
      this.bitmap
    );
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.setCircle(this.attributes.radius);
    this.sprite.body.velocity.setTo(this.attributes.vx, this.attributes.vy);
    this.sprite.body.collideWorldBounds = this.attributes.collideWorldBounds;
    this.sprite.body.bounce.set(this.attributes.bounce);
  }
}
Circle.ATTRIBUTES = {
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
Circle.MAX_R = 100;
Circle.MIN_R = 25;
export default Circle;
