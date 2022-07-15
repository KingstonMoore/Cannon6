class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle );
    velocity.mult(15);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x, y: velocity.y});
  }

  display() 
  {
    push();
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
    pop();
  }

  remove(index){
    World.remove(world, balls[index].body)
    delete balls[index]
  }
}
