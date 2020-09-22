
class Bob{
  constructor(x, y, r) {
    const options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body);
    Matter.Body.setMass(this.body.mass *5);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    ellipseMode(RADIUS);
    ellipse( pos.x, pos.y, this.r , this.r );
   
  }
}
