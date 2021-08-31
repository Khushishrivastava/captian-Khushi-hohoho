class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
      isStatic: true
    };

this.x = x
this.y = y
this.r = 40;
this.body = Bodies.circle(this.x,this.y,this.r);
    this.body = Bodies.circle(this.x,this.y,40,options);
    //add circle to the body

    //loadImage
    
    World.add(world, this.body);
    this.image = loadImage("assets/cannonball.png")
  }

  //add shoot function 
shoot(){

//what is your fav colour mam?

var velocity = p5.Vector.fromAngle(cannon.angle)
velocity.mult(20)
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.Body,{x:velocity.x,y:velocity.y})
}
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

//call the image function
image(this.image,0,0,this.r,this.r)

    pop();

    }
  }

